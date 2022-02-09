import { render, screen } from '@testing-library/react';

import { Logo } from '@components/atoms';

describe('Single standalone logo tests', () => {
  it('Renders content', () => {
    render(<Logo />);
    const iconElement = screen.getByRole('img');
    expect(iconElement).toBeVisible();
  });

  it('Renders logo with custom className', () => {
    render(<Logo className="text-neutral-200" />);
    const iconElement = screen.getByRole('img');
    expect(iconElement).toBeVisible();
    expect(iconElement).toHaveClass('text-neutral-200');
  });
});
