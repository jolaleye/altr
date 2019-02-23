import Head from 'next/head';
import ga from 'react-ga';

import Root from '../components/Root';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { breakpoints } from '../theme';

export default () => {
  ga.pageview('/cookies');

  return (
    <Root>
      <Head>
        <title key="title">Altr • Cookies</title>
        <meta key="meta-title" name="title" content="Altr • Cookies" />
      </Head>

      <Nav />
      <main>
        <section>
          <h1>Cookies</h1>
          <h2>What are cookies?</h2>
          <p>
            Cookies are tiny text files that websites send to a user's browser. They are generally used for things like
            remembering that a user is logged in, site preferences, or analytics services. This page will describe what
            cookies Altr uses and their purpose.
          </p>
          <h2>Cookies in use</h2>
          <p>
            1. Altr uses Google Analytics, a widely used analytics service, to understand how users discover and
            interact with the site.
          </p>
          <p>
            For specific information regarding Google's use of this data, read{' '}
            <a target="_blank" href="https://policies.google.com/privacy?hl=en">
              Google's Privacy Policy.
            </a>
          </p>
          <h2>Disabling cookies</h2>
          <p>
            You can prevent cookies by changing your browser's settings (visit your browser's help center to learn how).
            Please make note that disabling cookies may affect the functionality of this or other sites.
          </p>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        section {
          padding: 0 0.75em 3.5em 0.75em;
          text-align: left;
        }

        h1 {
          font-weight: 600;
          margin: 1em 0;
          text-align: center;
        }

        h2 {
          font-weight: 600;
          font-size: 1em;
          margin-top: 1.5em;
        }

        p {
          margin: 0.5em 0;
          font-size: 0.85em;
        }

        a {
          text-decoration: none;
          color: #3367d6;
        }

        @media ${breakpoints.sm} {
          section {
            margin: 0 8%;
          }
        }

        @media ${breakpoints.md} {
          section {
            margin: 0 12%;
          }
        }

        @media ${breakpoints.md} {
          section {
            margin: 0 16%;
          }
        }
      `}</style>
    </Root>
  );
};
