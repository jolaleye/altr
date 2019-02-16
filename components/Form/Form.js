import { useState } from 'react';

import { breakpoints } from '../../theme';
import Upload from './Upload';

export default function Form() {
  const [file, setFile] = useState();

  const upload = file => {
    setFile(file);
  };

  return (
    <div className="form-container">
      <Upload upload={upload} />

      <style jsx>{`
        .form-container {
          display: block;
          margin: 3em 0.5em 0 0.5em;
          box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.15);
          border-radius: 28px;
          padding: 2em 3em;
        }

        @media ${breakpoints.sm} {
          .form-container {
            width: 32em;
            margin: 3em auto 0 auto;
            padding: 2.5em 4em;
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
