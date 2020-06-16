import NavBar from './NavBar';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>The Opinion Bowl</title>
            <link rel="stylesheet"
            href="https://bootswatch.com/4/flatly/bootstrap.css" />
            <script data-ad-client="ca-pub-6241376391251116" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <NavBar />
        <div className="container">
        {props.children}
        </div>
      
    </div>
)

export default Layout;