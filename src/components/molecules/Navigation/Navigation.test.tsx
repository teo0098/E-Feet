import { render, screen, within } from '@testing-library/react';

import { Navigation } from '@components/molecules';
import { navigationMenu } from '@components/molecules/Navigation';

const slicedNavigationMenu = navigationMenu.slice(0, 3);

describe('Main navigation component tests', () => {
  it('Renders content', () => {
    render(<Navigation />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeVisible();
    const linkElements = within(navElement).getAllByRole('link');
    expect(linkElements).toHaveLength(5);
  });

  it('Renders content with custom data', () => {
    render(<Navigation data={slicedNavigationMenu} />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeVisible();
    const linkElements = within(navElement).getAllByRole('link');
    expect(linkElements).toHaveLength(3);
  });

  it('Renders with custom styles', () => {
    render(<Navigation styles={{ color: 'red' }} />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeVisible();
    expect(navElement).toHaveStyle({ color: 'red' });
  });

  it('Renders with custom className', () => {
    render(<Navigation className="text-neutral-200" />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeVisible();
    expect(navElement).toHaveClass('text-neutral-200');
  });
});
