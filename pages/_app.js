import{ Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import '../styles/globals.css';


import { StateContext } from '../context/StateContext';
import Loading from '../components/loading';


function MyApp( { Component, pageProps } ) {
  return (
    <Suspense fallback={ <Loading /> }>
    <StateContext>
      <Layout>
        <Toaster />
      

     

          <Component { ...pageProps } />
          

     

      </Layout>

    </StateContext>

    </Suspense>
  )
}

export default MyApp
