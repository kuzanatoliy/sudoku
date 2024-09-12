import { TParentComponent } from 'types';

import styles from './HomePage.module.scss';

export const HomePage: TParentComponent = () => {
  return <div class={styles.container}>Home page</div>;
};
