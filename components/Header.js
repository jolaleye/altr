import { breakpoints } from '../theme';
import Nav from './Nav';
import Form from './Form/Form';

export default function Header() {
  return (
    <header>
      <Background />
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

function Background() {
  return (
    <div>
      <img className="circle" src="/static/img/circle.svg" alt="" />
      <img className="blob" src="/static/img/blob.svg" alt="" />
      <img className="blob2" src="/static/img/blob2.svg" alt="" />

      <style jsx>{`
        div {
          position: relative;
          z-index: -1;
        }

        .circle,
        .blob,
        .blob2 {
          position: absolute;
          transform-origin: center;
        }

        .circle {
          width: 6em;
          top: 0;
          left: 0;
          transform: translate(110%, -65%);
        }

        .blob {
          width: 10em;
          top: 0;
          left: 0;
          transform: translate(-45%, 225%) rotate(30deg);
        }

        .blob2 {
          width: 9em;
          top: 0;
          right: 0;
          transform: translate(55%, 220%) rotate(100deg);
        }

        @media ${breakpoints.sm} {
          .circle {
            width: 10em;
            transform: translate(125%, -80%);
          }

          .blob {
            width: 12em;
            transform: translate(-60%, 210%) rotate(100deg);
          }

          .blob2 {
            width: 11em;
            transform: translate(50%, 150%) rotate(50deg);
          }
        }

        @media ${breakpoints.md} {
          .circle {
            width: 12em;
          }

          .blob {
            width: 14em;
          }

          .blob2 {
            width: 13em;
          }
        }

        @media ${breakpoints.lg} {
          .circle {
            width: 14em;
          }

          .blob {
            width: 16em;
          }

          .blob2 {
            width: 15em;
          }
        }
      `}</style>
    </div>
  );
}
