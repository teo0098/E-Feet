import type { NextPage } from 'next';
import { collection, query, getDocs } from 'firebase/firestore';

import { SEO } from '@components/atoms';
import { Home as HomeTemplate } from '@components/templates';

import { firestore, FirebaseCollections } from '@utils/firebase';

import { Shoes } from 'src/types';

const firebaseQuery = query(collection(firestore, FirebaseCollections.SHOES));

type HomePageProps = {
  products: Shoes;
};

const Home: NextPage<HomePageProps> = ({ products }) => (
  <>
    <SEO />
    <HomeTemplate products={products} />
  </>
);

export async function getStaticProps() {
  try {
    const products: Shoes = [];
    const querySnapshot = await getDocs(firebaseQuery);
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        mainImage: doc.data().mainImage,
        price: doc.data().price,
        title: doc.data().title,
      });
    });
    return {
      props: {
        products,
      },
      revalidate: 60,
    };
  } catch {
    throw new Error();
  }
}

export default Home;
