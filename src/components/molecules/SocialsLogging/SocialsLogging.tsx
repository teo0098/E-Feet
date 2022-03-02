import React from 'react';
// import { FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth';

import { Button } from '@components/atoms';

import { Facebook, Google, Twitter } from '@assets/icons';

// import { useSocials } from '@hooks/index';

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
  // const { handleSignIn } = useSocials();

  const classNames: string = [
    'grid justify-center items-center content-center gap-4',
    className,
  ].join(' ');
  return (
    <div data-testid="socialsLogging" className={classNames} style={styles}>
      <Button
        // onClick={() => handleSignIn({ provider: new FacebookAuthProvider() })}
        className="flex items-center text-slate-100 hover:text-slate-100 bg-facebook hover:bg-facebook"
      >
        <Facebook className="mr-1 text-slate-100" />
        Log in through Facebook
      </Button>
      <Button
        // onClick={() => handleSignIn()}
        className="flex items-center text-slate-100 hover:text-slate-100 bg-google hover:bg-google"
      >
        <Google className="mr-1 text-slate-100" />
        Log in through Google
      </Button>
      <Button
        // onClick={() => handleSignIn({ provider: new TwitterAuthProvider() })}
        className="flex items-center text-slate-100 hover:text-slate-100 bg-twitter hover:bg-twitter"
      >
        <Twitter className="mr-1 text-slate-100" />
        Log in through Twitter
      </Button>
      {children}
    </div>
  );
};

export default SocialsLogging;
