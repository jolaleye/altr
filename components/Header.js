import { breakpoints } from '../theme';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <Nav />
      <h1>Transform your images, videos, and audio with ease.</h1>
      <div className="form-container" />

      <style jsx>{`
        header {
          text-align: center;
        }

        h1 {
          font-weight: 600;
          font-size: 1.5em;
          margin: 0.5em 0.75em 0 0.75em;
        }

        .form-container {
          display: block;
          margin: 3em 0.5em 0 0.5em;
          box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.15);
          border-radius: 28px;
          padding: 2em 3em;
        }

        @media ${breakpoints.sm} {
          h1 {
            margin: 0.8em 1em 0 1em;
          }

          .form-container {
            width: 32em;
            margin: 3em auto 0 auto;
            padding: 2.5em 4em;
          }
        }

        @media ${breakpoints.md} {
          .form-container {
            width: 34em;
          }
        }
      `}</style>
    </header>
  );
}
