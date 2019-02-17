import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import mime from 'mime';

import { breakpoints } from '../../theme';
import Upload from './Upload';
import ImageOptions from './ImageOptions';
import Download from './Download';

export default function Form() {
  const [error, setError] = useState();
  const [file, setFile] = useState();
  const [result, setResult] = useState();
  const [waiting, setWaiting] = useState();

  // clear errors on click
  const form = useRef();
  useEffect(() => {
    form.current.addEventListener('click', () => setError(''));
  });

  const submit = options => {
    const reqData = new FormData();
    // add the file and chosen options
    reqData.append('file', file);
    for (const option of Object.keys(options)) {
      if (options[option]) reqData.set(option, options[option]);
    }

    setWaiting(true);
    axios
      .post('http://localhost:3000/upload', reqData, { responseType: 'blob' })
      .then(res => {
        setWaiting(false);
        // combine the old name with the new extension
        const name = `${file.name.replace(/(?:\.([^.]+))?$/, '')}.${mime.getExtension(res.data.type)}`;
        setResult(new File([res.data], name));
      })
      .catch(err => {
        setWaiting(false);

        if (err.response) {
          const reader = new FileReader();
          reader.onload = e => setError(e.target.result);
          reader.readAsText(err.response.data);
        } else if (err.request) setError('Something went wrong.');
      });
  };

  // decide which stage to show
  let stage;
  if (result || waiting) stage = <Download result={result} />;
  else if (file) {
    if (/^image/.test(file.type)) stage = <ImageOptions submit={submit} />;
  } else stage = <Upload upload={setFile} setError={setError} />;

  return (
    <div className="form-container" ref={form}>
      <div className="top-bar">
        {/* blank elements center the error message whether the back button is present or not */}
        {!result && !waiting && file ? (
          <p className="back" onClick={() => setFile(null)}>
            <i className="uil uil-angle-left" /> back
          </p>
        ) : (
          <p className="blank" />
        )}
        {error && <p className="error">{error}</p>}
        <p className="blank" />
      </div>

      {stage}

      <style jsx>{`
        .form-container {
          display: block;
          margin: 3em 0.5em 0 0.5em;
          box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.15);
          border-radius: 28px;
          padding: 2em 3em;
        }

        .top-bar {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: center;
          margin-bottom: 1em;
        }

        .back,
        .blank {
          flex: 1;
        }

        .error {
          font-size: 0.7em;
          font-weight: 500;
          color: hsla(0, 100%, 65%, 0.9);
        }

        .back {
          text-align: left;
          display: flex;
          align-items: center;
          font-size: 0.8em;
        }

        .back:hover {
          cursor: pointer;
        }

        .back i {
          font-size: 1.2em;
        }

        @media ${breakpoints.sm} {
          .form-container {
            width: 32em;
            margin: 3em auto 0 auto;
            padding: 2.5em 5em;
          }
        }

        @media ${breakpoints.md} {
          .form-container {
            width: 34em;
          }
        }
      `}</style>
    </div>
  );
}
