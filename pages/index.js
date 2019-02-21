import ga from 'react-ga';
import Head from 'next/head';

import Root from '../components/Root';
import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Footer';

ga.initialize('UA-129681195-3');

export default () => {
  ga.pageview('/');

  return (
    <Root>
      <Head>
        <meta name="google-site-verification" content="--2IU_142cQKYRKwYPI4kGk-aaDqDIXCjYFGl0Jd_fE" />
      </Head>
      <div className="root">
        <Header />
        <main>
          <Features />
        </main>
        <Footer />
      </div>

      <style jsx>{`
        .root {
          overflow-x: hidden;
        }
      `}</style>
    </Root>
  );
};
