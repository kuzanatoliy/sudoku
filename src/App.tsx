import { HashRouter as Router, Route, Navigate } from '@solidjs/router';

import { TParentComponent } from 'types';
import { DeviceProvider } from 'components';
import { HomePage } from 'home-page';
import { SudokuPage } from 'sudoku-page';
import { ContactMePage } from 'contact-me-page';
import { NotFoundPage } from 'not-found-page';

import { MainLayout } from './MainLayout';

import '../src/theme.scss';

export const App: TParentComponent = () => (
  <DeviceProvider>
    <Router>
      <Route path='/home' component={HomePage} />
      <Route path='/*' component={MainLayout}>
        <Route path='/contact-me' component={ContactMePage} />
        <Route path='/play' component={SudokuPage} />
        <Route path='/' component={() => <Navigate href='/home' />} />
        <Route path='*' component={NotFoundPage} />
      </Route>
    </Router>
  </DeviceProvider>
);
