import NavBar from './NavBar';
import Head from 'next/head';



const Layout = (props) => (
    <div>
        <Head>
        <script dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TFF64VX'');`,
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