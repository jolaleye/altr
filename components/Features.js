import { breakpoints } from '../theme';

export default function Features() {
  return (
    <section>
      <h1>Features</h1>
      <ul>
        <li>
          <i className="uil uil-check" />
          Convert image, video, or audio file format
        </li>
        <li>
          <i className="uil uil-check" />
          Adjust image quality and compression
        </li>
        <li>
          <i className="uil uil-check" />
          Import YouTube video and other media by URL
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

      <style jsx>{`
        section {
          padding: 3.5em 1.5em;
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
        }

        h1 {
          font-weight: 600;
          font-size: 1.2em;
          margin-top: 1em;
          margin-bottom: 0.5em;
        }

        ul {
          text-align: left;
          list-style: none;
        }

        li {
          font-size: 0.8em;
          margin: 0.5em 0;
          display: flex;
          align-items: center;
        }

        li i {
          font-size: 1.8em;
        }

        @media ${breakpoints.sm} {
          h1 {
            font-size: 1.4em;
          }

          li {
            font-size: 1em;
          }
        }

        @media ${breakpoints.md} {
          li {
            font-size: 0.9em;
          }
        }
      `}</style>
    </section>
  );
}
