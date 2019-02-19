import { breakpoints } from '../theme';

export default function Features() {
  return (
    <section id="features">
      <Background />
      <div className="wrapper">
        <h1>Features</h1>
        <ul>
          <li>
            <i className="uil uil-check" />
            Convert between image, video, and audio file formats
          </li>
          <li>
            <i className="uil uil-check" />
            Adjust image quality and compression
          </li>
          <li>
            <i className="uil uil-check" />
            Import images, videos, and audio by URL
          </li>
          <li>
            <i className="uil uil-check" />
            Change image and video dimensions
          </li>
          <li>
            <i className="uil uil-check" />
            Trim video and audio clips
          </li>
        </ul>
      </div>

      <style jsx>{`
        .wrapper {
          padding: 3.5em 0.75em;
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
        }

        h1 {
          font-weight: 600;
          margin-top: 1em;
          margin-bottom: 0.5em;
        }

        ul {
          text-align: left;
          list-style: none;
        }

        li {
          margin: 1em 0;
          display: flex;
          align-items: center;
        }

        li i {
          font-size: 1.75em;
        }
      `}</style>
    </section>
  );
}

function Background() {
  return (
    <div>
      <img className="dots" src="/static/img/dots.svg" alt="" />
      <img className="dots2" src="/static/img/dots2.svg" alt="" />
      <img className="circle" src="/static/img/circle2.svg" alt="" />
      <img className="blob" src="/static/img/blob.svg" alt="" />

      <style jsx>{`
        div {
          position: relative;
          z-index: -1;
        }

        .dots,
        .dots2,
        .circle,
        .blob {
          position: absolute;
          transform-origin: center;
        }

        .dots {
          width: 5em;
          top: 0;
          left: 0;
          transform: translate(-20%, 20%);
        }

        .dots2 {
          width: 7em;
          top: 0;
          right: 0;
          transform: translate(20%, -5%);
        }

        .circle {
          width: 5em;
          top: 0;
          left: 0;
          transform: translate(-30%, 575%) rotate(90deg);
        }

        .blob {
          width: 8em;
          top: 0;
          right: 0;
          transform: translate(40%, 550%) rotate(-20deg);
        }

        @media ${breakpoints.sm} {
          .dots {
            width: 6em;
            transform: translate(22%, 15%);
          }

          .dots2 {
            width: 8em;
            transform: translate(18%, 0%);
          }

          .circle {
            width: 6em;
            transform: translate(-20%, 450%) rotate(90deg);
          }

          .blob {
            width: 10em;
            transform: translate(25%, 400%) rotate(-20deg);
          }
        }

        @media ${breakpoints.md} {
          .dots {
            width: 6em;
          }

          .dots2 {
            width: 9em;
          }

          .circle {
            width: 9em;
            transform: translate(-30%, 275%) rotate(90deg);
          }

          .blob {
            width: 13em;
            transform: translate(20%, 300%) rotate(-30deg);
          }
        }

        @media ${breakpoints.lg} {
          .dots {
            width: 7em;
          }

          .dots2 {
            width: 10em;
          }

          .circle {
            width: 9em;
            transform: translate(-30%, 280%) rotate(90deg);
          }

          .blob {
            width: 14em;
          }
        }
      `}</style>
    </div>
  );
}
