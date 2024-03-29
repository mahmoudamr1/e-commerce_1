
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import '../styles/globals.css';


import { StateContext } from '../context/StateContext';
import Loading from '../components/loading';


function MyApp( { Component, pageProps } ) {
  return (
 
    <StateContext>
      <Layout>
        <Toaster />
      

     

          <Component { ...pageProps } />
          

     

      </Layout>

    </StateContext>


  )
}

export default MyApp
