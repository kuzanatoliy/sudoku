import { createEffect, createSignal } from 'solid-js';
import { ESudokuFieldSize, SudokuPlay, useDeviceContext } from 'components';
import { TSudokuValue } from 'sudoku-engine';

import data from '../data/plays.json';
import styles from './App.module.scss';

import '../src/theme.scss';

const App = () => {
  const deviceState = useDeviceContext();
  const [sudokuPlaySize, setSudokuPlaySize] = createSignal<ESudokuFieldSize>(
    ESudokuFieldSize.DEFAULT
  );

  createEffect(() => {
    const { isTablet, isMobile } = deviceState();
    setSudokuPlaySize(
      isMobile || isTablet ? ESudokuFieldSize.MIDDLE : ESudokuFieldSize.LARGE
    );
  });

  return (
    <>
      <header class={styles.app_header}>
        <h1 class={styles.app_header_title}>Sudoku</h1>
      </header>
      <main class={styles.app_main}>
        <SudokuPlay
          initialPlay={data[0].play as TSudokuValue[]}
          size={sudokuPlaySize()}
        />
      </main>
      <footer class={styles.app_footer}>© Kuzanatoliorg</footer>
    </>
  );
};

export default App;
