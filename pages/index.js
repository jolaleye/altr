import { breakpoints } from '../theme';
import Head from 'next/head';
import Header from '../components/Header';

export default () => (
  <>
    <Head>
      <title>Altr</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600" rel="stylesheet" />
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
          line-height: 1.5;
          color: hsl(0, 0%, 18%);
        }

        @media ${breakpoints.md} {
          html {
            font-size: 20px;
            line-height: 1.875;
          }
        }

        @media ${breakpoints.lg} {
          html {
            font-size: 24px;
            line-height: 2.25;
          }
        }

        @media ${breakpoints.xl} {
          html {
            font-size: 38px;
            line-height: 3.56;
          }
        }
      `}</style>
    </div>
  </>
);
