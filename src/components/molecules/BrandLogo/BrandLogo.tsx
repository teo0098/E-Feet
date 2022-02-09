import { Logo } from '@components/atoms';

type BrandLogoProps = {
  styles?: { [key: string]: string };
  className?: string;
};

const BrandLogo: React.VFC<BrandLogoProps> = ({ styles = {}, className = '' }) => {
  const classNames = ['shadow-md flex justify-center p-2 rounded-b-3xl', className].join(' ');

  return (
    <header style={styles} className={classNames}>
      <Logo />
    </header>
  );
};

export default BrandLogo;
