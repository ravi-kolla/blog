import React from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Ravi Teja Kolla" />
        <meta name="description" content="Ravi Teja Kolla, Software Engineer" />
        <meta name="keywords" content="Ravi Teja,Ravi Teja Kolla,Ravi Teja Portfolio,Raviteja Portfolio,Kolla,Venkata Ravi Teja Kolla, Ravi random clicks,r_randonclicks,Ravi Teja Kolla Photography" />
        <meta name="google-site-verification" content="UyXO3DXkxKwbW_0Nv95_D2uTrZ8q7YueIv2BGoKFquM" />
        <meta name="msvalidate.01" content="CF297ABC958C453AD2974C80FF42CCD4" />
        <title>Ravi Teja Kolla</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script data-ad-client="ca-pub-4737001282920677" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Header />
      <Container>
      {props.children}
      </Container>
      <Footer />
  </>
)
export default Layout
