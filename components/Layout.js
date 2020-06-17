import NavBar from './NavBar';
import Head from 'next/head';



const Layout = (props) => (
    <div>
        <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-169748631-1"></script>
        <script dangerouslySetInnerHTML={{
    __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-169748631-1');`,
  }}>

  </script>
            <title>The Opinion Bowl</title>
            <link rel="stylesheet"
            href="https://bootswatch.com/4/flatly/bootstrap.css" />
            <meta name="description" content="A website dedicated to sharing the entire breadth of a given controversy" />
            <meta name="keywords" content='free speech freedom of expression freedom of speech definition what is free speech' />
            <meta name="robots" content="all" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script data-ad-client="ca-pub-6241376391251116" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> 
     

        </Head>
        <NavBar />
        <div className="container">
        {props.children}
        </div>
      
    </div>
)

export default Layout;