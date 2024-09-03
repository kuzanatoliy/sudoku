/* eslint-disable solid/no-proxy-apis */
import { createStore } from 'solid-js/store';
import { TParentComponent } from 'types';
import { Button, EButtonVariant, TextareaField, TextField } from 'components';
import { EHttpMethod, useQuery } from 'query';

import styles from './ContactMePage.module.scss';

export const ContactMePage: TParentComponent = () => {
  const { runQuery } = useQuery(
    'https://render-mailer.onrender.com/message',
    undefined,
    { method: EHttpMethod.POST }
  );
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
    message: {
      value: '',
      isValid: true,
      isTouched: false,
    },
    subject: {
      value: '',
      isValid: true,
      isTouched: false,
    },
    email: {
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

  const onChangeEmail = (value: string) => {
    setStore('email', {
      value,
      isValid: !!value && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
      isTouched: true,
    });
  };

  const onChangeMessage = (value: string) => {
    setStore('message', {
      value,
      isValid: !!value,
      isTouched: true,
    });
  };

  const onChangeSubject = (value: string) => {
    setStore('subject', {
      value,
      isValid: !!value,
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
        value={store.lastName.value}
        isError={store.lastName.isTouched && !store.lastName.isValid}
        helperMessage='Example: Cook'
        isRequired
        onChange={onChangeLastName}
      />
      <TextField
        label='Email:'
        placeholder='Type email'
        value={store.email.value}
        isError={store.email.isTouched && !store.email.isValid}
        helperMessage='Example: example@mail.com'
        isRequired
        onChange={onChangeEmail}
      />
      <TextField
        label='Subject:'
        placeholder='Type subject'
        value={store.subject.value}
        isError={store.subject.isTouched && !store.subject.isValid}
        helperMessage='Example: Bug report'
        isRequired
        onChange={onChangeSubject}
      />
      <TextareaField
        label='Message:'
        placeholder='Type your message'
        value={store.message.value}
        isError={store.message.isTouched && !store.message.isValid}
        helperMessage='Example: The pice of functionality works incorrectly'
        isRequired
        rows={7}
        onChange={onChangeMessage}
      />
      <div class={styles.control_panel}>
        <Button
          class={styles.control}
          variant={EButtonVariant.OUTLINED}
          onClick={() => {
            setStore({
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
              message: {
                value: '',
                isValid: true,
                isTouched: false,
              },
              subject: {
                value: '',
                isValid: true,
                isTouched: false,
              },
              email: {
                value: '',
                isValid: true,
                isTouched: false,
              },
            });
          }}
        >
          Reset
        </Button>
        <Button
          class={styles.control}
          onClick={() => {
            runQuery({
              body: {
                subject: store.subject.value,
                name: `${store.firstName.value} ${store.lastName.value}`,
                email: store.email.value,
                message: store.message.value,
              },
            });
          }}
        >
          Submin
        </Button>
      </div>
    </div>
  );
};
