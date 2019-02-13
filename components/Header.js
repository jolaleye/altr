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
          font-size: 1.2em;
          margin: 0.5em 4% 0 4%;
        }

        @media ${breakpoints.sm} {
          h1 {
            font-size: 1.4em;
            margin-top: 0.8;
          }
        }
      `}</style>
    </header>
  );
}
