import { DeviceProvider } from 'components';
import { SudokuPage } from 'sudoku-page';

import styles from './App.module.scss';

import '../src/theme.scss';

export const App = () => (
  <DeviceProvider>
    <header class={styles.app_header}>
      <h1 class={styles.app_header_title}>Sudoku</h1>
    </header>
    <main class={styles.app_main}>
      <SudokuPage />
    </main>
    <footer class={styles.app_footer}>© Kuzanatoliorg</footer>
  </DeviceProvider>
);
