import { render, screen } from '@testing-library/react';

import { NavItem } from '@components/atoms';

describe('Single standalone link tests', () => {
  it('Renders content', () => {
    render(<NavItem>Link</NavItem>);
    const linkElement = screen.getByRole('link', { name: /link/i });
    expect(linkElement).toBeVisible();
    expect(linkElement).toHaveTextContent(/link/i);
  });

  it('Renders nothing', () => {
    render(<NavItem />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeVisible();
    expect(linkElement).toHaveTextContent('');
  });

  it('Renders default href to home page', () => {
    render(<NavItem>Link</NavItem>);
    const linkElement = screen.getByRole('link', { name: /link/i });
    expect(linkElement).toBeVisible();
    expect(linkElement).toHaveTextContent(/link/i);
    expect(linkElement).toHaveAttribute('href', '/');
  });

  it('Renders link with custom href', () => {
    render(<NavItem href="/search">Link</NavItem>);
    const linkElement = screen.getByRole('link', { name: /link/i });
    expect(linkElement).toBeVisible();
    expect(linkElement).toHaveTextContent(/link/i);
    expect(linkElement).toHaveAttribute('href', '/search');
  });

  it('Renders link with custom styles', () => {
    render(<NavItem styles={{ color: 'red' }}>Link</NavItem>);
    const linkElement = screen.getByRole('link', { name: /link/i });
    expect(linkElement).toBeVisible();
    expect(linkElement).toHaveTextContent(/link/i);
    expect(linkElement).toHaveStyle({ color: 'red' });
  });

  it('Renders link with custom className', () => {
    render(<NavItem className="text-neutral-200">Link</NavItem>);
    const linkElement = screen.getByRole('link', { name: /link/i });
    expect(linkElement).toBeVisible();
    expect(linkElement).toHaveTextContent(/link/i);
    expect(linkElement).toHaveClass('text-neutral-200');
  });

  it('Renders link as active', () => {
    render(<NavItem active>Link</NavItem>);
    const linkElement = screen.getByRole('link', { name: /link/i });
    expect(linkElement).toBeVisible();
    expect(linkElement).toHaveTextContent(/link/i);
    expect(linkElement).toHaveClass('border-neutral-900');
  });

  it('Renders link as inactive', () => {
    render(<NavItem>Link</NavItem>);
    const linkElement = screen.getByRole('link', { name: /link/i });
    expect(linkElement).toBeVisible();
    expect(linkElement).toHaveTextContent(/link/i);
    expect(linkElement).not.toHaveClass('border-neutral-900');
  });
});
