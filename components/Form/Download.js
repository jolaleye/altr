import { useState } from 'react';
import { saveAs } from 'file-saver';
import ga from 'react-ga';

import { useInterval } from '../../utils';
import { colors, shadows } from '../../theme';
import Loader from './Loader';

const loadingMsgs = [
  'Putting minions to work...',
  'Making the thing...',
  'Loading a loading message...',
  "Enlisting the help of Santa's elves...",
  'Please hold',
  '*Elevator music*...'
];

export default function Download({ result, reset }) {
  const [msgIndex, setMsgIndex] = useState(0);

  useInterval(() => {
    const nextIndex = msgIndex + 1;
    if (nextIndex < loadingMsgs.length) setMsgIndex(nextIndex);
    else setMsgIndex(0);
  }, 6000);

  const download = () => {
    saveAs(result);
    ga.event({ category: 'Tool', action: 'Download' });
  };

  return (
    <>
      {result ? (
        <div>
          <p>Your file is ready!</p>
          <button onClick={download}>Download</button>
          <p className="reset" onClick={reset}>
            <i className="uil uil-angle-left" /> Do it again
          </p>
        </div>
      ) : (
        <div>
          <p className="loading">{loadingMsgs[msgIndex]}</p>
          <Loader download />
        </div>
      )}

      <style jsx>{`
        p {
          font-weight: 500;
          color: ${colors.dark};
        }

        button {
          cursor: pointer;
          margin-top: 1.5em;
          font-size: 1em;
          color: ${colors.dark};
          font-family: inherit;
          font-weight: 600;
          padding: 0.8em 2em;
          box-shadow: ${shadows.normal};
          border-radius: 10px;
          border: none;
          background-color: white;
        }

        button:hover {
          box-shadow: ${shadows.hover};
        }

        button:focus {
          outline: none;
        }

        .reset {
          font-size: 0.75em;
          margin-top: 2.25em;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateX(-1.5%);
        }

        .reset:hover {
          cursor: pointer;
        }

        .reset i {
          font-size: 1.5em;
        }

        .loading {
          font-size: 0.9em;
        }
      `}</style>
    </>
  );
}
