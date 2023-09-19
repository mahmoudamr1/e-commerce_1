
import Head from 'next/head';
import Navbar from './Navbar';
import Footer_2 from './Footer_2';
import Loading from './loading';

const Layout = ( { children } ) => {
  return (
    <>
      <div className="layout">
        <Head>
          <title>MAHMOUD Store</title>
          <link rel="icon" href="/large (1).png" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        </Head>
        <header>
          <Navbar />
        </header>

          <main className="main-container">
          
            { children }
        
        </main>

        <footer>
          <Footer_2 />
        </footer>
      </div>

    </>
  )
}

export default Layout