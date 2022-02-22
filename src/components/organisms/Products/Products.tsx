import { Product } from '@components/molecules';

type Styles = { [key: string]: string };

type ProductType = {
  title: string;
  mainImage: string;
  price: number;
  id: string;
};

type ProductProps = {
  styles?: Styles;
  className?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
  productsData?: Array<ProductType>;
};

const Products: React.VFC<ProductProps> = ({
  styles = {},
  className = '',
  children = null,
  isLoading = false,
  productsData = [],
}) => {
  const classNames: string = ['', className].join(' ');

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div style={styles} className={classNames}>
      {productsData.map(({ id, mainImage, price, title }) => (
        <Product key={id} imageSrc={mainImage} title={title} price={price} />
      ))}
      {children}
    </div>
  );
};

export default Products;
