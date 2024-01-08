/* @refresh reload */
import { render } from 'solid-js/web';
import { DeviceProvider } from 'components';

import './index.css';
import App from './App';

const root = document.getElementById('root');

render(
  () => (
    <DeviceProvider>
      <App />
    </DeviceProvider>
  ),
  root!
);
