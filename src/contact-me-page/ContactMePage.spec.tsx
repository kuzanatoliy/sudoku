import { render, screen } from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vitest } from 'vitest';
import { useQuery } from 'query';

import { ContactMePage } from './ContactMePage';

vitest.mock('query', async () => {
  const origin = await vitest.importActual<typeof import('query')>('query');
  return {
    ...origin,
    useQuery: vitest.fn(),
  };
});

describe('ContactMePage', () => {
  const runQuerySpy = vitest.fn();

  const renderComponent = () => {
    vitest.mocked(useQuery).mockImplementation(() => ({
      state: vitest.fn().mockReturnValue({
        isLoading: false,
        isStarted: false,
        isValid: true,
        isError: false,
        data: undefined,
      }),
      runQuery: runQuerySpy,
    }));
    return render(() => <ContactMePage />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
    expect(screen.getByRole('textbox', { name: 'First name:' })).toBeDefined();
    expect(screen.getByRole('textbox', { name: 'Last name:' })).toBeDefined();
    expect(screen.getByRole('textbox', { name: 'Email:' })).toBeDefined();
    expect(screen.getByRole('textbox', { name: 'Subject:' })).toBeDefined();
    expect(screen.getByRole('textbox', { name: 'Message:' })).toBeDefined();
  });

  it('Should validate workflow', async () => {
    renderComponent();
    await userEvent.type(
      screen.getByRole('textbox', { name: 'First name:' }),
      'firstname'
    );
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Last name:' }),
      'lastname'
    );
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Email:' }),
      'email@hm.com'
    );
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Subject:' }),
      'subject'
    );
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Message:' }),
      'message'
    );
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(runQuerySpy).toHaveBeenCalledWith({
      body: {
        subject: 'subject',
        name: `firstname lastname`,
        email: 'email@hm.com',
        message: 'message',
      },
    });
  });

  it('Should validate reset workflow', async () => {
    renderComponent();
    await userEvent.type(
      screen.getByRole('textbox', { name: 'First name:' }),
      'firstname'
    );
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Last name:' }),
      'lastname'
    );
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Email:' }),
      'email@hm.com'
    );
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Subject:' }),
      'subject'
    );
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Message:' }),
      'message'
    );
    expect(screen.getByRole('textbox', { name: 'First name:' })).toHaveValue(
      'firstname'
    );
    expect(screen.getByRole('textbox', { name: 'Last name:' })).toHaveValue(
      'lastname'
    );
    expect(screen.getByRole('textbox', { name: 'Email:' })).toHaveValue(
      'email@hm.com'
    );
    expect(screen.getByRole('textbox', { name: 'Subject:' })).toHaveValue(
      'subject'
    );
    expect(screen.getByRole('textbox', { name: 'Message:' })).toHaveValue(
      'message'
    );
    await userEvent.click(screen.getByRole('button', { name: 'Reset' }));
    expect(screen.getByRole('textbox', { name: 'First name:' })).toHaveValue(
      ''
    );
    expect(screen.getByRole('textbox', { name: 'Last name:' })).toHaveValue('');
    expect(screen.getByRole('textbox', { name: 'Email:' })).toHaveValue('');
    expect(screen.getByRole('textbox', { name: 'Subject:' })).toHaveValue('');
    expect(screen.getByRole('textbox', { name: 'Message:' })).toHaveValue('');
  });
});
