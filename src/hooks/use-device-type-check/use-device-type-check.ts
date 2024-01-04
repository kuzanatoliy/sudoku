import { onMount, onCleanup, createSignal } from 'solid-js';

const MOBILE_S = 320;
const MOBILE_M = 375;
const MOBILE_L = 425;
const TABLET = 768;
const LAPTOP = 1024;
const LAPTOP_L = 1440;
const LAPTOP_4K = 2560;

const extractStateFromWindow = () => ({
  isMobileS: window.innerWidth <= MOBILE_S,
  isMobileM: window.innerWidth > MOBILE_S && window.innerWidth <= MOBILE_M,
  isMobileL: window.innerWidth > MOBILE_M && window.innerWidth <= MOBILE_L,
  isMobile: window.innerWidth <= MOBILE_L,
  isTablet: window.innerWidth > MOBILE_L && window.innerWidth <= TABLET,
  isLaptop: window.innerWidth > LAPTOP,
  isLaptopL: window.innerWidth > LAPTOP_L && window.innerWidth <= LAPTOP_4K,
  isLaptop4K: window.innerWidth > LAPTOP_4K,
});

export const useDeviceTypeCheck = () => {
  const [state, setState] = createSignal(extractStateFromWindow());

  const handler = () => {
    setState(extractStateFromWindow());
  };

  onMount(() => {
    window.addEventListener('resize', handler);
  });

  onCleanup(() => {
    window.removeEventListener('resize', handler);
  });

  return state;
};
