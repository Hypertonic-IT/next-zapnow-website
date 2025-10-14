import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/global.css';
import '@/styles/website.css';
import '@/styles/webnav.css';
import '@/styles/aepsform.css';
import '@/styles/footerlink.css';
import Toast from '../components/Toast';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <BootstrapJSLoader /> */}
      <Toast />
      
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
