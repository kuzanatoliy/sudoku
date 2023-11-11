import { TComponent } from '../../types';

import styles from './SudokuField.module.scss';

export interface ISudokuFieldProps {}

export const SudokuField: TComponent<ISudokuFieldProps> = ({}) => {
  return <input class={styles.sudokufield} />;
};
