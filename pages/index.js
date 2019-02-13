import { breakpoints } from '../theme';
import Head from 'next/head';
import Header from '../components/Header';
import Features from '../components/Features';

export default () => (
  <>
    <Head>
      <title>Altr</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600" rel="stylesheet" />
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v0.0.2/css/unicons.css" />
    </Head>

    <div className="root">
      <Header />
      <main>
        <Features />
      </main>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          font-size: 16px;
          color: hsl(0, 0%, 18%);
          font-family: 'Poppins', sans-serif;
        }

        @media ${breakpoints.md} {
          html {
            font-size: 20px;
          }
        }

        @media ${breakpoints.lg} {
          html {
            font-size: 24px;
          }
        }

        @media ${breakpoints.xl} {
          html {
            font-size: 38px;
          }
        }
      `}</style>
    </div>
  </>
);
