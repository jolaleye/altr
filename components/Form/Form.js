import { useState } from 'react';
import axios from 'axios';

import { breakpoints } from '../../theme';
import Upload from './Upload';
import Options from './Options';

export default function Form() {
  const [file, setFile] = useState(null);
  const clearFile = () => setFile(null);

  const [result, setResult] = useState(null);
  const [uploadErr, setUploadErr] = useState('');

  const submit = options => {
    const reqData = new FormData();
    // add the file and chosen options
    reqData.append('file', file);
    for (const option of Object.keys(options)) {
      if (options[option]) reqData.set(option, options[option]);
    }

    axios
      .post('http://localhost:3000/upload', reqData)
      .then(res => setResult(res.data))
      .catch(err => {
        if (err.response) setUploadErr(err.response.data);
        else if (err.request) setUploadErr('Something went wrong.');
      });
  };

  // decide which stage to show
  let stage;
  if (result) stage = <div />;
  else if (file) stage = <Options file={file} back={clearFile} submit={submit} />;
  else stage = <Upload upload={setFile} />;

  return (
    <div className="form-container">
      {uploadErr && <p className="error">{uploadErr}</p>}
      {stage}

      <style jsx>{`
        .form-container {
          display: block;
          margin: 3em 0.5em 0 0.5em;
          box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.15);
          border-radius: 28px;
          padding: 2em 3em;
        }

        .error {
          font-size: 0.7em;
          font-weight: 500;
          color: hsla(0, 100%, 65%, 0.9);
          margin-bottom: 2em;
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
