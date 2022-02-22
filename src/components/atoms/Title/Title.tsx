type TitleVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Styles = { [key: string]: string };

type TitleProps = {
  styles?: Styles;
  className?: string;
  children?: React.ReactNode;
  variant?: TitleVariants;
};

const renderTitle = ({
  variant = 'h1',
  title = null,
  styles = {},
  classNames = '',
}: {
  variant: TitleVariants;
  title: React.ReactNode;
  styles: Styles;
  classNames: string;
}) => {
  switch (variant) {
    case 'h2':
      return (
        <h2 style={styles} className={classNames}>
          {title}
        </h2>
      );
    case 'h3':
      return (
        <h3 style={styles} className={classNames}>
          {title}
        </h3>
      );
    case 'h4':
      return (
        <h4 style={styles} className={classNames}>
          {title}
        </h4>
      );
    case 'h5':
      return (
        <h5 style={styles} className={classNames}>
          {title}
        </h5>
      );
    case 'h6':
      return (
        <h6 style={styles} className={classNames}>
          {title}
        </h6>
      );
    default:
      return (
        <h1 style={styles} className={classNames}>
          {title}
        </h1>
      );
  }
};

const Title: React.VFC<TitleProps> = ({
  styles = {},
  className = '',
  children = null,
  variant = 'h1',
}) => {
  const classNames: string = ['text-slate-400', className].join(' ');

  return renderTitle({ classNames, styles, title: children, variant });
};

export default Title;
