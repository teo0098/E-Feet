import Image from 'next/image';

import { LogoImage } from '@assets/images';

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
  src?: string | StaticImageData;
};

const Logo: React.VFC<LogoProps> = ({
  className = '',
  height = 50,
  width = 78.125,
  src = null,
}) => (
  <Image
    className={className}
    src={src ?? LogoImage}
    alt="E-Feet"
    layout="fixed"
    height={height}
    width={width}
    priority
  />
);

export default Logo;
