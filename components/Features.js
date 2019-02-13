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
          padding: 3.5em 1em;
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
          margin: 0.5em 0;
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
