import Head from 'next/head';
import Header from '../components/Header';

export default () => (
  <>
    <Head>
      <title>Altr</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className="root">
      <Header />

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          font-size: 16px;
        }
      `}</style>
    </div>
  </>
);
