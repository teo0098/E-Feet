import { render, screen } from '@testing-library/react';

import { BrandLogo } from '@components/molecules';

describe('Single standalone entire brand logo tests', () => {
  it('Renders content', () => {
    render(<BrandLogo />);
    const bannerElement = screen.getByRole('banner');
    expect(bannerElement).toBeVisible();
  });

  it('Renders brand logo with custom styles', () => {
    render(<BrandLogo styles={{ color: 'red' }} />);
    const bannerElement = screen.getByRole('banner');
    expect(bannerElement).toBeVisible();
    expect(bannerElement).toHaveStyle({ color: 'red' });
  });

  it('Renders brand logo with custom className', () => {
    render(<BrandLogo className="text-neutral-200" />);
    const bannerElement = screen.getByRole('banner');
    expect(bannerElement).toBeVisible();
    expect(bannerElement).toHaveClass('text-neutral-200');
  });
});
