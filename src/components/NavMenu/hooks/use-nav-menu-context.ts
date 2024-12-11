import { useContext } from 'solid-js';

import { NavMenuContext } from '../NavMenuContext';

export const useNavMenuContext = () => useContext(NavMenuContext);
