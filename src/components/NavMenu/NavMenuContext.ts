import { createContext } from 'solid-js';

import { TNavMenuState } from './types';

const defaultHandler = () => {
  throw 'Error: It is neccessary to use NavMenu';
};

export const NavMenuContext = createContext<TNavMenuState>({
  state: defaultHandler,
  subscribe: defaultHandler,
  unsubscribe: defaultHandler,
});
