import Link from 'next/link';

type NavItemProps = {
  href?: string;
  styles?: { [key: string]: string };
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
};

const NavItem: React.VFC<NavItemProps> = ({
  href = '/',
  styles = {},
  className = '',
  children = null,
  active = false,
}) => {
  const classNames: string = [
    'text-neutral-900 border-b-4',
    active ? 'border-neutral-900' : 'border-transparent',
    className,
  ].join(' ');

  return (
    <Link href={href}>
      <a className={classNames} style={styles}>
        {children}
      </a>
    </Link>
  );
};

export default NavItem;
