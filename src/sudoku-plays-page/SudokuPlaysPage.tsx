import { createEffect, For, Show } from 'solid-js';
import { useNavigate } from '@solidjs/router';

import { TParentComponent, TSudokuPlayData } from 'types';
import { useQuery, EHttpMethod } from 'query';

import styles from './SudokuPlaysPage.module.scss';
import { PlayMenu } from './PlayMenu';
import { PlayMenuItem } from './PlayMenuItem';
import { PlayPreview } from './PlayPreview';

export const SudokuPlaysPage: TParentComponent = () => {
  const navigate = useNavigate();

  console.log(navigate);

  const { state, runQuery } = useQuery<TSudokuPlayData[]>('./plays.json', [], {
    method: EHttpMethod.GET,
  });

  createEffect(() => runQuery());

  console.log(state().data);

  return (
    <div class={styles.container}>
      <Show when={state().isStarted && !state().isLoading}>
        <PlayMenu>
          <PlayMenuItem>
            <For each={state().data}>
              {(item) => <PlayPreview play={item.play} />}
            </For>
          </PlayMenuItem>
        </PlayMenu>
      </Show>
    </div>
  );
};
