import { HashRouter as Router, Route } from '@solidjs/router';

import { TParentComponent } from 'types';
import { DeviceProvider } from 'components';

import { Layout } from './Layout';

import '../src/theme.scss';
import { HomePage } from 'home-page';

export const App: TParentComponent = () => (
  <DeviceProvider>
    <Router>
      <Route path='/home' component={HomePage} />
      <Route path='*' component={Layout} />
    </Router>
  </DeviceProvider>
);
