import Head from 'next/head';

import { breakpoints, colors } from '../theme';

export default function Root({ children }) {
  return (
    <>
      <Head>
        <title key="title">Altr • Transform your images, videos, and audio with ease.</title>
        <meta key="meta-title" name="title" content="Altr • Transform your images, videos, and audio with ease." />
        <meta
          name="description"
          content="Quickly convert between file formats, adjust image quality, import media by URL, and more."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link key="fonts" href="https://fonts.googleapis.com/css?family=Poppins:400,500,600" rel="stylesheet" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v0.0.2/css/unicons.css" />

        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="manifest" href="/static/site.webmanifest" />
        <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#161616" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="altr" />
        <meta name="application-name" content="altr" />
        <meta name="msapplication-TileColor" content="#161616" />
        <meta name="msapplication-config" content="/static/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:title" content="Altr • Transform your images, videos, and audio with ease." />
        <meta
          property="description"
          content="Quickly convert between file formats, adjust image quality, import media by URL, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://altr.app" />
        <meta property="og:image" content="https://altr.app/static/img/thumbnail.png" />
        <meta property="twitter:card" content="summary" />
      </Head>

      {children}

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          font-size: 16px;
          color: ${colors.darker};
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
    </>
  );
}
