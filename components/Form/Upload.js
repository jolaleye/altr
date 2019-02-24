import { useState, useRef } from 'react';

import { breakpoints, colors, shadows } from '../../theme';
import { validateType, fetch } from '../../utils';
import Loader from './Loader';

export default function Upload({ upload, setError }) {
  const [loading, setLoading] = useState(false);

  // handle file selection
  const fileSelect = useRef();
  const submitFile = () => {
    const file = fileSelect.current.files[0];
    if (file && !validateType(file)) setError('That file type is not currently supported.');
    else upload(file);
  };

  // handle file upload by url
  const [fileUrl, setFileUrl] = useState('');
  const submitUrl = async e => {
    e.preventDefault();
    if (!fileUrl) return;

    setFileUrl('');
    setLoading(true);

    try {
      const file = await fetch(fileUrl);
      setLoading(false);
      if (file && !validateType(file)) setError("That URL doesn't belong to a supported file type.");
      else upload(file);
    } catch (err) {
      setLoading(false);
      setError("That URL doesn't seem to work.");
    }
  };

  // handle file upload by drag & drop
  const fileDrop = useRef();
  const onDragOver = e => {
    e.preventDefault();
    if (loading) return;
    e.target.classList.add('dragover');
  };
  const onDragLeave = e => e.target.classList.remove('dragover');
  const onDrop = e => {
    e.preventDefault();
    if (loading) return;
    e.target.classList.remove('dragover');

    const file = e.dataTransfer.files[0];
    if (file && !validateType(file)) setError('Sorry, that file type is not currently supported.');
    else upload(file);
  };

  return (
    <div className="upload">
      <label className="fileSelect">
        Choose file
        <input type="file" disabled={loading} onChange={submitFile} ref={fileSelect} />
      </label>

      <span className="or">OR</span>

      <form className="fileURL" onSubmit={submitUrl}>
        <i className="uil uil-search" />
        <input
          type="text"
          disabled={loading}
          placeholder="Enter a URL"
          value={fileUrl}
          onChange={e => setFileUrl(e.target.value)}
        />
        {loading && <Loader upload />}
      </form>

      <span className="or">OR</span>

      <div className="fileDrop" ref={fileDrop} onDrop={onDrop} onDragOver={onDragOver} onDragLeave={onDragLeave}>
        <p>Drag & Drop</p>
      </div>

      <style jsx>{`
        .upload {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
        }

        .or {
          display: block;
          color: ${colors.lightGray};
          opacity: 0.65;
          font-weight: 600;
          margin: 1.25em 0;
        }

        .fileSelect {
          overflow: hidden;
          position: relative;
          cursor: pointer;
          color: ${colors.dark};
          font-size: 0.8em;
          font-weight: 600;
          padding: 0.8em 1.75em;
          box-shadow: ${shadows.normal};
          border-radius: 10px;
          background-color: white;
        }

        .fileSelect:hover {
          box-shadow: ${shadows.hover};
        }

        .fileSelect input {
          cursor: inherit;
          display: block;
          width: 100%;
          height: 100%;
          opacity: 0;
          position: absolute;
          top: 0;
          right: 0;
        }

        .fileURL {
          background-color: ${colors.lightest};
          font-family: inherit;
          font-weight: 600;
          font-size: 0.8em;
          padding-left: 0.8em;
          border-radius: 10px;
          width: 90%;
          text-align: left;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
        }

        .fileURL i {
          color: ${colors.lightGray};
          font-size: 1.2em;
        }

        .fileURL input {
          padding: 0.75em 0.5em;
          margin-left: 0.25em;
          font-family: inherit;
          font-weight: inherit;
          font-size: inherit;
          color: ${colors.dark};
          border: none;
          background-color: transparent;
          width: 100%;
        }

        .fileURL input::placeholder {
          color: ${colors.lightGray};
        }

        .fileURL input:focus {
          outline: none;
        }

        .fileDrop {
          display: flex;
          width: 90%;
          height: 6em;
          border-radius: 10px;
          background-color: ${colors.lightest};
          font-weight: 600;
          font-size: 0.9em;
          color: ${colors.lightGray};
        }

        .fileDrop.dragover {
          background-color: ${colors.light};
        }

        .fileDrop p {
          margin: auto;
        }

        .or:nth-of-type(2),
        .fileDrop {
          display: none;
        }
        @media ${breakpoints.md} {
          .or:nth-of-type(2) {
            display: initial;
          }
          .fileDrop {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
}
