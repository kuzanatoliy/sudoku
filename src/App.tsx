import { HashRouter as Router, Route, Navigate } from '@solidjs/router';

import { TParentComponent } from 'types';
import { DeviceProvider } from 'components';
import { NotFoundPage } from 'not-found-page';
import { SudokuPage } from 'sudoku-page';

import styles from './App.module.scss';

import '../src/theme.scss';

export const App: TParentComponent = () => (
  <DeviceProvider>
    <header class={styles.app_header}>
      <h1 class={styles.app_header_title}>Sudoku</h1>
    </header>
    <main class={styles.app_main}>
      <Router>
        <Route path='/play' component={SudokuPage} />
        <Route path='/' component={() => <Navigate href='/play' />} />
        <Route path='*' component={NotFoundPage} />
      </Router>
    </main>
    <footer class={styles.app_footer}>© Kuzanatoliorg</footer>
  </DeviceProvider>
);
