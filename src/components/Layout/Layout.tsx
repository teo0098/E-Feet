import { BrandLogo, Navigation } from '@components/molecules';

type LayoutProps = {
  children: React.ReactNode;
  styles?: { [key: string]: string };
  className?: string;
};

const Layout: React.VFC<LayoutProps> = ({ children, className = '', styles = {} }) => {
  const classNames: string = ['min-h-screen bg-slate-100 flex flex-col pb-16', className].join(' ');

  return (
    <div style={styles} className={classNames} data-testid="mainLayout">
      <BrandLogo />
      {children}
      <Navigation />
    </div>
  );
};

export default Layout;
