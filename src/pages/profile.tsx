import { NextPage } from 'next';

import { SEO } from '@components/atoms';
import { Profile as ProfileTemplate } from '@components/templates';

import { PagesTitles } from '@utils/addons';

const Profile: NextPage = () => (
  <>
    <SEO subTitle={PagesTitles.PROFILE} />
    <ProfileTemplate />
  </>
);

export default Profile;
