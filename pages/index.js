


import { client } from '../Lib/client';


import Section_1 from '../components/Section_1';
import Section_2 from '../components/Section_2';
import Slider_2 from '../components/Slider-2';

import Slider_1 from '../components/Slider';

import React, { Suspense } from 'react';
import Loading from '../components/loading';

const Home = ( {products,products_2,}) => (
  <>
    <Suspense fallback={ <Loading /> }>
    <Slider_2 />
    <Slider_1 />
    <Section_1 product={ products} />
    <Section_2 product={ products_2 } />
    </Suspense>
  </>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "sectionOne"]';
  const products = await client.fetch( query );

  const products_2 = await client.fetch( '*[_type == "sectionTwo"]' );

  return {
    props: { products, products_2 }
  }
}

export default Home;
