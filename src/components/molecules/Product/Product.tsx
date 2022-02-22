import Image from 'next/image';

import { Heart } from '@assets/icons';

import { Price, Title } from '@components/atoms';

type Styles = { [key: string]: string };

type ProductProps = {
  styles?: Styles;
  className?: string;
  children?: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
  price?: number;
  title?: string;
};

const Product: React.VFC<ProductProps> = ({
  styles = {},
  className = '',
  children = null,
  imageSrc = '',
  imageAlt = 'Product image',
  price = 0,
  title = '',
}) => {
  const classNames: string = ['', className].join(' ');

  return (
    <section data-testid="product" style={styles} className={classNames}>
      <div>
        <Image src={imageSrc} layout="fill" objectFit="cover" alt={imageAlt} />
        <Heart />
      </div>
      <Price> {price} </Price>
      <Title variant="h1"> {title} </Title>
      {children}
    </section>
  );
};

export default Product;
