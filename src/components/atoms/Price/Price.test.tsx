import { render, screen } from '@testing-library/react';

import { Price } from '@components/atoms';

describe('Single standalone price tests', () => {
  it('Renders content', () => {
    render(<Price>100</Price>);
    const priceElement = screen.getByText('100$', { exact: true });
    expect(priceElement).toBeVisible();
  });

  it('Renders nothing', () => {
    render(<Price />);
    const priceElement = screen.getByText('$', { exact: true });
    expect(priceElement).toBeVisible();
  });

  it('Renders price with custom styles', () => {
    render(<Price styles={{ color: 'red' }}>100</Price>);
    const priceElement = screen.getByText('100$', { exact: true });
    expect(priceElement).toBeVisible();
    expect(priceElement).toHaveStyle({ color: 'red' });
  });

  it('Renders price with custom className', () => {
    render(<Price className="text-neutral-200">100</Price>);
    const priceElement = screen.getByText('100$', { exact: true });
    expect(priceElement).toBeVisible();
    expect(priceElement).toHaveClass('text-neutral-200');
  });
});
