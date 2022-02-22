import { render, screen } from '@testing-library/react';

import { Product } from '@components/molecules';

describe('Single standalone product tests', () => {
  it('Renders content', () => {
    const productTitle = 'Sprandi new model';
    render(
      <Product price={259.25} title={productTitle} imageSrc="https://via.placeholder.com/150" />
    );
    const priceElement = screen.getByTestId('productPrice');
    expect(priceElement).toBeVisible();
    expect(priceElement).toHaveTextContent('259.25');
    const titleElement = screen.getByRole('heading', { name: productTitle });
    expect(titleElement).toBeVisible();
    const imageElement = screen.getByRole('img', { name: 'Product image' });
    expect(imageElement).toBeVisible();
  });

  it('Renders product with custom styles', () => {
    render(<Product styles={{ color: 'red' }} imageSrc="https://via.placeholder.com/150" />);
    const productElement = screen.getByTestId('product');
    expect(productElement).toBeVisible();
    expect(productElement).toHaveStyle({ color: 'red' });
  });

  it('Renders product with custom className', () => {
    render(<Product className="text-neutral-200" imageSrc="https://via.placeholder.com/150" />);
    const productElement = screen.getByTestId('product');
    expect(productElement).toBeVisible();
    expect(productElement).toHaveClass('text-neutral-200');
  });

  it('Renders content with custom children', () => {
    const productTitle = 'Sprandi new model';
    render(
      <Product price={259.25} title={productTitle} imageSrc="https://via.placeholder.com/150">
        <h1>Custom Text</h1>
      </Product>
    );
    const priceElement = screen.getByTestId('productPrice');
    expect(priceElement).toBeVisible();
    expect(priceElement).toHaveTextContent('259.25');
    const titleElement = screen.getByRole('heading', { name: productTitle });
    expect(titleElement).toBeVisible();
    const imageElement = screen.getByRole('img', { name: 'Product image' });
    expect(imageElement).toBeVisible();
    const childrenElement = screen.getByRole('heading', { name: /Custom Text/i });
    expect(childrenElement).toBeVisible();
  });
});
