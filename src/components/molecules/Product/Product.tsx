import Image from 'next/image';

import { Heart } from '@assets/icons';

import { Price, Title } from '@components/atoms';

import { DEFAULT_IMAGE } from '@utils/addons';

type Styles = { [key: string]: string };

type ProductProps = {
  styles?: Styles;
  className?: string;
  imageSrc: string;
  imageAlt?: string;
  price?: number;
  title?: string;
};

const Product: React.VFC<ProductProps> = ({
  styles = {},
  className = '',
  imageSrc = DEFAULT_IMAGE,
  imageAlt = 'Product image',
  price = 0,
  title = '',
}) => {
  const classNames: string = ['', className].join(' ');

  return (
    <section data-testid="product" style={styles} className={classNames}>
      <div className="relative h-[150px]">
        <Image src={imageSrc} layout="fill" objectFit="cover" alt={imageAlt} />
        <span className="absolute top-1 left-1">
          <Heart />
        </span>
      </div>
      <Price>{price}</Price>
      <Title variant="h1">{title}</Title>
    </section>
  );
};

export default Product;
