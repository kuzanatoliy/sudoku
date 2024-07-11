import { TParentComponent } from 'types';
import { Button, EButtonVariant, TextareaField, TextField } from 'components';

import styles from './ContactMePage.module.scss';

export const ContactMePage: TParentComponent = () => {
  return (
    <div class={styles.container}>
      <h2 class={styles.title}>Contact me</h2>
      <TextField
        label='First name:'
        placeholder='Type your first name'
        value=''
      />
      <TextField
        label='Last name:'
        placeholder='Type your last name'
        value=''
      />
      <TextField label='Subject:' placeholder='Type subject' value='' />
      <TextareaField
        label='Message:'
        placeholder='Type your message'
        value=''
      />
      <div class={styles.control_panel}>
        <Button class={styles.control} variant={EButtonVariant.OUTLINED}>
          Reset
        </Button>
        <Button class={styles.control}>Submin</Button>
      </div>
    </div>
  );
};
