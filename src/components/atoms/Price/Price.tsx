type TitleProps = {
  styles?: { [key: string]: string };
  className?: string;
  children?: React.ReactNode;
};

const Title: React.VFC<TitleProps> = ({ styles = {}, className = '', children = null }) => {
  const classNames: string = ['text-neutral-900', className].join(' ');

  return (
    <span data-testid="productPrice" style={styles} className={classNames}>
      {typeof children === 'number' ? children.toFixed(2) : children}$
    </span>
  );
};

export default Title;
