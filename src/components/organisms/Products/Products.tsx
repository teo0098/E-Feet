import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';

import { Product } from '@components/molecules';

import { Shoes } from 'src/types';

import { DEFAULT_IMAGE } from '@utils/addons';

type Styles = { [key: string]: string };

type ProductProps = {
  styles?: Styles;
  className?: string;
  isLoading?: boolean;
  isError?: boolean;
  data?: Shoes;
};

const Products: React.VFC<ProductProps> = ({
  styles = {},
  className = '',
  isLoading = false,
  isError = false,
  data = [],
}) => {
  const classNames: string = ['', className].join(' ');

  if (isLoading) {
    return (
      <>
        {Array.from(Array(8).keys()).map((key) => (
          <div key={key} data-testid="products-loading">
            <Skeleton variant="rectangular" />
            <Skeleton variant="rectangular" />
            <Skeleton variant="rectangular" />
          </div>
        ))}
      </>
    );
  }

  if (isError) return <Alert severity="error">Unable to fetch products. Try again later.</Alert>;

  return (
    <div data-testid="products" style={styles} className={classNames}>
      {data.map(({ id, mainImage, price, title }) => (
        <Product
          key={id}
          imageSrc={mainImage?.trim?.() ? mainImage : DEFAULT_IMAGE}
          title={title}
          price={price}
        />
      ))}
    </div>
  );
};

export default Products;
