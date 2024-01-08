import { useContext } from 'solid-js';

import { DeviceContext } from '../DeviceContext';

export const useDeviceContext = () => useContext(DeviceContext);
