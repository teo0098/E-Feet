import { Logo as LogoIcon } from '@assets/icons';

type LogoProps = {
  height?: number;
  width?: number;
  className?: string;
  src?: string | StaticImageData;
};

const Logo: React.VFC<LogoProps> = ({
  width = 78.125,
  height = 50,
  className = '',
  src = undefined,
}) => {
  const classNames: string = ['', className].join(' ');

  return <LogoIcon className={classNames} width={width} height={height} src={src} />;
};

export default Logo;
