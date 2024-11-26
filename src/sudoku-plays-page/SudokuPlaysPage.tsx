import { createEffect } from 'solid-js';
import { useNavigate } from '@solidjs/router';

import { TParentComponent, TSudokuPlayData } from 'types';
import { Button } from 'components';
import { useQuery, EHttpMethod } from 'query';

import styles from './SudokuPlaysPage.module.scss';

export const SudokuPlaysPage: TParentComponent = () => {
  const navigate = useNavigate();

  const { state, runQuery } = useQuery<TSudokuPlayData[]>('./plays.json', [], {
    method: EHttpMethod.GET,
  });

  createEffect(() => runQuery());

  console.log(state);

  return (
    <div class={styles.container}>
      <h2 class={styles.title}>Oops!</h2>
      <div>Looks like there is an issue with our system</div>
      <Button onClick={() => navigate('/')}>Move to home</Button>
    </div>
  );
};
