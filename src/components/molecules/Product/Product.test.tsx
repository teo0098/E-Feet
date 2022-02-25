import { render, screen } from '@testing-library/react';

import { Product } from '@components/molecules';

import { DEFAULT_IMAGE } from '@utils/addons';

describe('Single standalone product tests', () => {
  it('Renders content', () => {
    const productTitle = 'Sprandi new model';
    render(<Product price={259.25} title={productTitle} imageSrc={DEFAULT_IMAGE} />);
    const priceElement = screen.getByTestId('productPrice');
    expect(priceElement).toBeVisible();
    expect(priceElement).toHaveTextContent('259.25');
    const titleElement = screen.getByRole('heading', { name: productTitle });
    expect(titleElement).toBeVisible();
    const imageElement = screen.getByRole('img', { name: 'Product image' });
    expect(imageElement).toBeVisible();
  });

  it('Renders product with custom styles', () => {
    render(<Product styles={{ color: 'red' }} imageSrc={DEFAULT_IMAGE} />);
    const productElement = screen.getByTestId('product');
    expect(productElement).toBeVisible();
    expect(productElement).toHaveStyle({ color: 'red' });
  });

  it('Renders product with custom className', () => {
    render(<Product className="text-neutral-200" imageSrc={DEFAULT_IMAGE} />);
    const productElement = screen.getByTestId('product');
    expect(productElement).toBeVisible();
    expect(productElement).toHaveClass('text-neutral-200');
  });
});
