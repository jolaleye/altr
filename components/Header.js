import { breakpoints } from '../theme';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <Nav />
      <h1>Transform your images, videos, and audio with ease.</h1>

      <style jsx>{`
        header {
          text-align: center;
        }

        h1 {
          font-weight: 600;
          font-size: 1.75em;
          margin: 0.5em 0.75em 0 0.75em;
        }

        @media ${breakpoints.sm} {
          h1 {
            margin-top: 0.8em;
          }
        }
      `}</style>
    </header>
  );
}
