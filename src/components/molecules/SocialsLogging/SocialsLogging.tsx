import React from 'react';

import { Button } from '@components/atoms';
import { Facebook, Google, Twitter } from '@assets/icons';

type SocialsLoggingProps = {
  styles?: { [key: string]: string };
  className?: string;
  children?: React.ReactNode;
};

const SocialsLogging: React.VFC<SocialsLoggingProps> = ({
  children = null,
  className = '',
  styles = {},
}) => {
  const classNames: string = [
    'grid justify-center items-center content-center gap-4 flex-1',
    className,
  ].join(' ');
  return (
    <div data-testid="socialsLogging" className={classNames} style={styles}>
      <Button className="flex items-center text-slate-100 bg-facebook">
        <Facebook className="mr-1 text-slate-100" />
        Log in through Facebook
      </Button>
      <Button className="flex items-center text-slate-100 bg-google">
        <Google className="mr-1 text-slate-100" />
        Log in through Google
      </Button>
      <Button className="flex items-center text-slate-100 bg-twitter">
        <Twitter className="mr-1 text-slate-100" />
        Log in through Twitter
      </Button>
      {children}
    </div>
  );
};

export default SocialsLogging;
