import { render, screen } from '@testing-library/react';

import { Products } from '@components/organisms';

import { DEFAULT_IMAGE } from '@utils/addons';

type ProductData = {
  id: string;
  mainImage: string;
  price: number;
  title: string;
};

const productsData: Array<ProductData> = [
  { id: '1', mainImage: DEFAULT_IMAGE, price: 254.58, title: 'Sprandi' },
  { id: '2', mainImage: DEFAULT_IMAGE, price: 127.58, title: 'Adidas' },
  { id: '3', mainImage: DEFAULT_IMAGE, price: 892.58, title: 'Nike' },
];

describe('Single standalone products tests', () => {
  it('Renders products successfully', () => {
    render(<Products data={productsData} />);
    const productsTitles = screen.getAllByRole('heading');
    expect(productsTitles).toHaveLength(3);
    const mappedProductTitles = productsTitles.map((element) => element.textContent);
    expect(mappedProductTitles).toEqual(['Sprandi', 'Adidas', 'Nike']);
  });

  it('Renders loading when retireving products', () => {
    render(<Products isLoading />);
    const productsLoadingElements = screen.getAllByTestId('products-loading');
    expect(productsLoadingElements).toHaveLength(8);
  });

  it('Renders products with error', () => {
    render(<Products isError />);
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toHaveTextContent(/Unable to fetch products. Try again later./);
  });

  it('Renders products with custom styles', () => {
    render(<Products styles={{ color: 'red' }} />);
    const productsElement = screen.getByTestId('products');
    expect(productsElement).toBeVisible();
    expect(productsElement).toHaveStyle({ color: 'red' });
  });

  it('Renders products with custom className', () => {
    render(<Products className="text-neutral-200" />);
    const productsElement = screen.getByTestId('products');
    expect(productsElement).toBeVisible();
    expect(productsElement).toHaveClass('text-neutral-200');
  });
});
