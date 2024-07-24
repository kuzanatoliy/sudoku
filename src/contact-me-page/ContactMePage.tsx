/* eslint-disable solid/no-proxy-apis */
import { createStore } from 'solid-js/store';
import { TParentComponent } from 'types';
import { Button, EButtonVariant, TextareaField, TextField } from 'components';

import styles from './ContactMePage.module.scss';

export const ContactMePage: TParentComponent = () => {
  const [store, setStore] = createStore({
    firstName: {
      value: '',
      isValid: true,
      isTouched: false,
    },
    lastName: {
      value: '',
      isValid: true,
      isTouched: false,
    },
  });

  const onChangeFirstName = (value: string) => {
    setStore('firstName', {
      value,
      isValid: !!value && /[A-Z,a-z]/.test(value),
      isTouched: true,
    });
  };

  const onChangeLastName = (value: string) => {
    setStore('lastName', {
      value,
      isValid: !!value && /[A-Z,a-z]/.test(value),
      isTouched: true,
    });
  };

  return (
    <div class={styles.container}>
      <h2 class={styles.title}>Contact me</h2>
      <TextField
        label='First name:'
        placeholder='Type your first name'
        value={store.firstName.value}
        isError={store.firstName.isTouched && !store.firstName.isValid}
        helperMessage='Example: Glen'
        isRequired
        onChange={onChangeFirstName}
      />
      <TextField
        label='Last name:'
        placeholder='Type your last name'
        value={store.firstName.value}
        isError={store.firstName.isTouched && !store.firstName.isValid}
        helperMessage='Example: Cook'
        isRequired
        onChange={onChangeLastName}
      />
      <TextField
        label='Subject:'
        placeholder='Type subject'
        value=''
        helperMessage='Example: Bug report'
        isRequired
      />
      <TextareaField
        label='Message:'
        placeholder='Type your message'
        value=''
        helperMessage='Example: The pice of functionality works incorrectly'
        isRequired
        rows={7}
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
