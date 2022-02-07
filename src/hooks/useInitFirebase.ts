import { useEffect } from 'react';

import { initializeFirebase, firebaseConfig } from '@utils/firebase';

const useInitFirebase = (initialConfig = firebaseConfig) => {
  useEffect(() => {
    initializeFirebase(initialConfig);
  }, [initialConfig]);
};

export { useInitFirebase };
