import { Products } from '@components/organisms';

import { Shoes } from 'src/types';

type HomeProps = {
  products: Shoes;
};

const Home: React.VFC<HomeProps> = ({ products }) => (
  <Products isError={!products?.length} data={products} />
);

export default Home;
