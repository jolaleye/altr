import { useState, useRef } from 'react';
import axios from 'axios';
import shortid from 'shortid';
import mime from 'mime';

import { breakpoints } from '../../theme';
import { validateMIME } from '../../utils';

export default function Upload({ upload, setError }) {
  // handle file selection
  const fileSelect = useRef();
  const submitFile = () => {
    const file = fileSelect.current.files[0];
    if (file && !validateMIME(file.type)) setError('That file type is not currently supported.');
    else upload(file);
  };

  // handle file upload by url
  const [fileUrl, setFileUrl] = useState('');
  const submitUrl = e => {
    e.preventDefault();

    // fetch the content using the api
    axios
      .post('http://localhost:3000/fetch', { url: fileUrl }, { responseType: 'blob' })
      .then(res => {
        const name = `${shortid.generate()}.${mime.getExtension(res.data.type)}`;
        const file = new File([res.data], name, { type: res.data.type });
        if (validateMIME(file.type)) upload(file);
        else setError("That URL doesn't belong to a supported image, video, or audio file.");
      })
      .catch(err => setError("That URL doesn't seem to work."));

    setFileUrl('');
  };

  // handle file upload by drag & drop
  const fileDrop = useRef();
  const onDragOver = e => {
    e.preventDefault();
    e.target.classList.add('dragover');
  };
  const onDragLeave = e => e.target.classList.remove('dragover');
  const onDrop = e => {
    e.preventDefault();
    e.target.classList.remove('dragover');

    const file = e.dataTransfer.files[0];
    if (validateMIME(file.type)) upload(file);
    else setError('This file type is not currently supported.');
  };

  return (
    <div className="upload">
      <label className="fileSelect">
        Choose file
        <input type="file" onChange={submitFile} ref={fileSelect} />
      </label>

      <span className="or">OR</span>

      <form className="fileURL" onSubmit={submitUrl}>
        <i className="uil uil-search" />
        <input type="text" placeholder="Enter a URL" value={fileUrl} onChange={e => setFileUrl(e.target.value)} />
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
          color: hsla(0, 0%, 18%, 0.3);
          font-weight: 600;
          margin: 1.25em 0;
        }

        .fileSelect {
          overflow: hidden;
          position: relative;
          cursor: pointer;
          color: hsla(0, 0%, 18%, 0.8);
          font-size: 0.8em;
          font-weight: 600;
          padding: 0.8em 1.75em;
          box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.15);
          border-radius: 10px;
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
          background-color: hsl(0, 0%, 97%);
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
          color: hsla(0, 0%, 18%, 0.5);
          font-size: 1.2em;
        }

        .fileURL input {
          padding: 0.75em 0.5em;
          margin-left: 0.25em;
          font-family: inherit;
          font-weight: inherit;
          font-size: inherit;
          color: hsla(0, 0%, 18%, 0.8);
          border: none;
          background-color: transparent;
          width: 100%;
        }

        .fileURL input::placeholder {
          color: hsla(0, 0%, 18%, 0.5);
        }

        .fileURL input:focus {
          outline: none;
        }

        .fileDrop {
          display: flex;
          width: 90%;
          height: 6em;
          border-radius: 10px;
          background-color: hsl(0, 0%, 97%);
          font-weight: 600;
          font-size: 0.9em;
          color: hsla(0, 0%, 18%, 0.5);
        }

        .fileDrop.dragover {
          background-color: hsl(0, 0%, 92%);
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
