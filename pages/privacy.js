import Head from 'next/head';
import ga from 'react-ga';

import Root from '../components/Root';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { breakpoints } from '../theme';

export default () => {
  ga.pageview('/privacy');

  return (
    <Root>
      <Head>
        <title key="title">Altr • Privacy</title>
        <meta key="meta-title" name="title" content="Altr • Privacy" />
      </Head>

      <Nav />
      <main>
        <section>
          <h1>Privacy</h1>
          <h2>Personal Information We Collect</h2>
          <p>None.</p>
          <p>
            No personally identifiable information is required to use Altr and therefore none is collected. The files
            you upload are altered according to your options and immediately deleted once you receive the result.
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
          font-size: 0.9em;
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
