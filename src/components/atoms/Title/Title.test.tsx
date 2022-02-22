import { render, screen } from '@testing-library/react';

import { Title } from '@components/atoms';

describe('Single standalone title tests', () => {
  it('Renders content', () => {
    render(<Title>Content</Title>);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeVisible();
    expect(headingElement).toHaveTextContent(/Content/i);
  });

  it('Renders nothing', () => {
    render(<Title />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeVisible();
  });

  it('Renders title with custom variant', () => {
    render(<Title variant="h5">Content</Title>);
    const headingElement = screen.getByRole('heading', { level: 5 });
    expect(headingElement).toBeVisible();
    expect(headingElement).toHaveTextContent(/Content/i);
  });

  it('Renders title with custom styles', () => {
    render(<Title styles={{ color: 'red' }}>Content</Title>);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeVisible();
    expect(headingElement).toHaveTextContent(/Content/i);
    expect(headingElement).toHaveStyle({ color: 'red' });
  });

  it('Renders title with custom className', () => {
    render(<Title className="text-neutral-200">Content</Title>);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeVisible();
    expect(headingElement).toHaveTextContent(/Content/i);
    expect(headingElement).toHaveClass('text-neutral-200');
  });
});
