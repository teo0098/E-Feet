import { useRequest } from '@hooks/index';

const useSocialsLogging = () => {
  const { handlePerformRequest: googleSignIn, response: googleResponse } = useRequest();
  const { handlePerformRequest: facebookSignIn, response: facebookResponse } = useRequest();
  const { handlePerformRequest: twitterSignIn, response: twitterResponse } = useRequest();

  const handleSignInWithGoogle = async () => {
    const { GoogleAuthProvider, signInWithPopup } = await import('firebase/auth');
    const { auth } = await import('@utils/firebase');
    googleSignIn(() => signInWithPopup(auth, new GoogleAuthProvider()));
  };

  const handleSignInWithFacebook = async () => {
    const { FacebookAuthProvider, signInWithPopup } = await import('firebase/auth');
    const { auth } = await import('@utils/firebase');
    facebookSignIn(() => signInWithPopup(auth, new FacebookAuthProvider()));
  };

  const handleSignInWithTwitter = async () => {
    const { TwitterAuthProvider, signInWithPopup } = await import('firebase/auth');
    const { auth } = await import('@utils/firebase');
    twitterSignIn(() => signInWithPopup(auth, new TwitterAuthProvider()));
  };

  return {
    googleResponse,
    facebookResponse,
    twitterResponse,
    handleSignInWithGoogle,
    handleSignInWithFacebook,
    handleSignInWithTwitter,
  };
};

export default useSocialsLogging;
