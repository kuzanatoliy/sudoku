import { SudokuPlay } from 'components';
import { TSudokuValue } from 'sudoku-engine';

import data from '../data/plays.json';
import styles from './App.module.scss';

import '../src/theme.scss';

const App = () => (
  <>
    <header class={styles.app_header}>
      <h1 class={styles.app_header_title}>Sudoku</h1>
    </header>
    <main class={styles.app_main}>
      <SudokuPlay initialPlay={data[0].play as TSudokuValue[]} />
    </main>
  </>
);

export default App;
