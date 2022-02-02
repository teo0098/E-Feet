import { NavItem } from '@components/atoms';

import { Cart, Heart, Home as HomeIcon, Search, User } from '@assets/icons';

type NavMenuType = {
  styles: { [key: string]: string };
  className: string;
  href: string;
  children: React.ReactNode;
};

type NavigationType = Array<NavMenuType>;

const navigationMenu: NavigationType = [
  { styles: {}, className: '', href: '/', children: <HomeIcon /> },
  { styles: {}, className: '', href: '/search', children: <Search /> },
  { styles: {}, className: '', href: '/wishlist', children: <Heart /> },
  { styles: {}, className: '', href: '/cart', children: <Cart /> },
  { styles: {}, className: '', href: '/user', children: <User /> },
];

const Navigation: React.VFC = () => (
  <nav className="flex fixed bottom-0 left-0 justify-between p-2 w-full bg-slate-300 shadow-lg">
    {navigationMenu.map(({ styles, className, href, children: menuChildren }) => (
      <NavItem styles={styles} className={className} key={href} href={href}>
        {menuChildren}
      </NavItem>
    ))}
  </nav>
);

export default Navigation;
