import styles from './App.module.scss';
import { TParentComponent } from 'types';

export const Layout: TParentComponent = (props) => (
  <>
    <header class={styles.app_header}>
      <h1 class={styles.app_header_title}>Sudoku</h1>
    </header>
    <main class={styles.app_main}>{props.children}</main>
    <footer class={styles.app_footer}>© Kuzanatoliorg</footer>
  </>
);
