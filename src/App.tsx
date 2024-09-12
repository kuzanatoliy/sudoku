import { HashRouter as Router, Route, Navigate } from '@solidjs/router';

import { TParentComponent } from 'types';
import { DeviceProvider } from 'components';
import { ContactMePage } from 'contact-me-page';
import { NotFoundPage } from 'not-found-page';
import { SudokuPage } from 'sudoku-page';

import styles from './App.module.scss';

import '../src/theme.scss';
import { HomePage } from 'home-page';

export const App: TParentComponent = () => (
  <DeviceProvider>
    <Router>
      <Route path='/home' component={HomePage} />
      <Route path='*'>
        <header class={styles.app_header}>
          <h1 class={styles.app_header_title}>Sudoku</h1>
        </header>
        <main class={styles.app_main}>
          <Router>
            <Route path='/contact-me' component={ContactMePage} />
            <Route path='/play' component={SudokuPage} />
            <Route path='/' component={() => <Navigate href='/home' />} />
            <Route path='*' component={NotFoundPage} />
          </Router>
        </main>
        <footer class={styles.app_footer}>© Kuzanatoliorg</footer>
      </Route>
    </Router>
  </DeviceProvider>
);
