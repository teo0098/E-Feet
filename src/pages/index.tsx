import type { NextPage } from 'next';

import { SEO } from '@components/atoms';
import { Home as HomeTemplate } from '@components/templates';

const Home: NextPage = () => (
  <>
    <SEO />
    <HomeTemplate />
  </>
);

export default Home;
