import { SudokuPlay } from 'components';
import { TSudokuValue } from 'sudoku-engine';

import data from '../data/plays.json';
import styles from './App.module.scss';

import '../src/theme.scss';

const App = () => (
  <div class={styles.app}>
    <SudokuPlay initialPlay={data[0].play as TSudokuValue[]} />
  </div>
);

export default App;
