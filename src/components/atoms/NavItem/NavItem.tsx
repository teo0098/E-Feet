import Link from 'next/link';

type NavItemProps = {
  href?: string;
  styles?: { [key: string]: string };
  className?: string;
  children?: React.ReactNode;
};

const NavItem: React.VFC<NavItemProps> = ({
  href = '/',
  styles = {},
  className = '',
  children = null,
}) => {
  const classNames: string = ['', className].join(' ');

  return (
    <Link href={href}>
      <a className={classNames} style={styles}>
        {children}
      </a>
    </Link>
  );
};

export default NavItem;
