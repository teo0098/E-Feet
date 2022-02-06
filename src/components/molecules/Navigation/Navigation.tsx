import { NavItem } from '@components/atoms';

import { Cart, Heart, Home as HomeIcon, Search, User } from '@assets/icons';

type NavMenuType = {
  styles: { [key: string]: string };
  className: string;
  href: string;
  children: React.ReactNode;
  active: boolean;
};

type NavigationType = Array<NavMenuType>;

export const navigationMenu: NavigationType = [
  { styles: {}, className: '', href: '/', children: <HomeIcon />, active: false },
  { styles: {}, className: '', href: '/search', children: <Search />, active: false },
  { styles: {}, className: '', href: '/wishlist', children: <Heart />, active: false },
  { styles: {}, className: '', href: '/cart', children: <Cart />, active: false },
  { styles: {}, className: '', href: '/user', children: <User />, active: false },
];

type NavigationProps = {
  data?: NavigationType;
  styles?: { [key: string]: string };
  className?: string;
};

const Navigation: React.VFC<NavigationProps> = ({
  data = navigationMenu,
  className = '',
  styles = {},
}) => {
  const classNames: string = [
    'flex fixed bottom-0 left-0 justify-between p-2 w-full bg-slate-300 shadow-lg',
    className,
  ].join(' ');

  return (
    <nav style={styles} className={classNames}>
      {data.map(
        ({
          styles: menuStyles,
          className: menuClassName,
          href,
          children: menuChildren,
          active,
        }) => (
          <NavItem
            styles={menuStyles}
            className={menuClassName}
            key={href}
            href={href}
            active={active}
          >
            {menuChildren}
          </NavItem>
        )
      )}
    </nav>
  );
};

export default Navigation;
