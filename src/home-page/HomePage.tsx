import { useNavigate } from '@solidjs/router';
import { TParentComponent } from 'types';

import styles from './HomePage.module.scss';
import { Button, EButtonVariant } from 'components';

export const HomePage: TParentComponent = () => {
  const navigate = useNavigate();
  return (
    <div class={styles.container}>
      <main class={styles.main}>
        <h1 class={styles.header}>Sudoku</h1>
        <Button
          onClick={() => navigate('/play')}
          variant={EButtonVariant.OUTLINED}
        >
          Go to play
        </Button>
      </main>
      <footer class={styles.footer}>© Kuzanatoliorg</footer>
    </div>
  );
};
