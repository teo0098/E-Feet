import { render, screen } from '@testing-library/react';

import { SocialsLogging } from '@components/molecules';
import { Button } from '@components/atoms';

describe('Single standalone socials logging tests', () => {
  it('Renders content', () => {
    render(<SocialsLogging />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
    const buttonsContent = buttons.map((button) => button.textContent);
    expect(buttonsContent).toEqual([
      'Log in through Facebook',
      'Log in through Google',
      'Log in through Twitter',
    ]);
  });

  it('Renders content with custom children', () => {
    render(
      <SocialsLogging>
        <Button>Log in through Apple</Button>
      </SocialsLogging>
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4);
    const buttonsContent = buttons.map((button) => button.textContent);
    expect(buttonsContent).toEqual([
      'Log in through Facebook',
      'Log in through Google',
      'Log in through Twitter',
      'Log in through Apple',
    ]);
  });

  it('Renders socialsLogging with custom styles', () => {
    render(<SocialsLogging styles={{ color: 'red' }} />);
    const socialsLoggingElement = screen.getByTestId('socialsLogging');
    expect(socialsLoggingElement).toBeVisible();
    expect(socialsLoggingElement).toHaveStyle({ color: 'red' });
  });

  it('Renders socialsLogging with custom className', () => {
    render(<SocialsLogging className="text-neutral-200" />);
    const socialsLoggingElement = screen.getByTestId('socialsLogging');
    expect(socialsLoggingElement).toBeVisible();
    expect(socialsLoggingElement).toHaveClass('text-neutral-200');
  });
});
