import { TParentComponent } from 'types';

import styles from './HomePage.module.scss';
import { Button, EButtonVariant } from 'components';

export const HomePage: TParentComponent = () => {
  return (
    <>
      <main class={styles.container}>
        <h1 class={styles.header}>Sudoku</h1>
        <Button variant={EButtonVariant.OUTLINED}>Go to play</Button>
      </main>
      <footer class={styles.app_footer}>© Kuzanatoliorg</footer>
    </>
  );
};
