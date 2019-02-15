import { breakpoints } from '../theme';
import Nav from './Nav';
import Form from './Form/Form';

export default function Header() {
  return (
    <header>
      <Nav />
      <h1>Transform your images, videos, and audio with ease.</h1>
      <Form />

      <style jsx>{`
        header {
          text-align: center;
        }

        h1 {
          font-weight: 600;
          font-size: 1.5em;
          margin: 0.5em 0.75em 0 0.75em;
        }

        @media ${breakpoints.sm} {
          h1 {
            margin: 0.8em 1em 0 1em;
          }
        }
      `}</style>
    </header>
  );
}
