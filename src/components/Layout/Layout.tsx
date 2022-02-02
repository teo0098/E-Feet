import { Navigation } from '@components/molecules';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.VFC<LayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-slate-200">
    {children}
    <Navigation />
  </div>
);

export default Layout;
