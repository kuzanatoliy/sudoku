import { useNavigate } from '@solidjs/router';

import { TParentComponent } from 'types';
import { Button } from 'components';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage: TParentComponent = () => {
  const navigate = useNavigate();

  return (
    <div class={styles.container}>
      <h2 class={styles.title}>Oops!</h2>
      <div>Looks like there is an issue with our system</div>
      <Button onClick={() => navigate('/')}>Move to home</Button>
    </div>
  );
};
