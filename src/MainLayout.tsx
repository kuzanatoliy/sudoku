import { TParentComponent } from 'types';

// import { Link } from 'components';

import styles from './MainLayout.module.scss';
//import { A } from '@solidjs/router';

export const MainLayout: TParentComponent = (props) => (
  <>
    <header class={styles.main_layout_header}>
      <h1 class={styles.main_layout_header_title}>Sudoku</h1>
      <nav>
        <a href='/test'>test</a>
      </nav>
    </header>
    <main class={styles.main_layout_main}>{props.children}</main>
    <footer class={styles.main_layout_footer}>© Kuzanatoliorg</footer>
  </>
);
