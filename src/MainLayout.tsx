import { TParentComponent } from 'types';

import styles from './MainLayout.module.scss';

export const MainLayout: TParentComponent = (props) => (
  <>
    <header class={styles.main_layout_header}>
      <h1 class={styles.main_layout_header_title}>Sudoku</h1>
    </header>
    <main class={styles.main_layout_main}>{props.children}</main>
    <footer class={styles.main_layout_footer}>© Kuzanatoliorg</footer>
  </>
);
