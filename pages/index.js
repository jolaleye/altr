import { breakpoints } from '../theme';
import Head from 'next/head';
import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default () => (
  <>
    <Head>
      <title>Altr • Transform your images, videos, and audio with ease.</title>
      <meta name="title" content="Altr • Transform your images, videos, and audio with ease." />
      <meta
        name="description"
        content="Quickly convert between file formats, adjust image quality, import YouTube videos, and more."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600" rel="stylesheet" />
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v0.0.2/css/unicons.css" />
    </Head>

    <div className="root">
      <Header />
      <main>
        <Features />
      </main>
      <Footer />

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

        @media ${breakpoints.sm} {
          html {
            font-size: 18px;
          }
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
