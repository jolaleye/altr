import { useState } from 'react';
import { saveAs } from 'file-saver';
import ga from 'react-ga';

import { useInterval } from '../../utils';

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
          <svg className="ring" viewBox="25 25 50 50">
            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10" />
          </svg>
        </div>
      )}

      <style jsx>{`
        p {
          font-weight: 500;
          color: hsla(0, 0%, 18%, 0.85);
        }

        button {
          cursor: pointer;
          margin-top: 1.5em;
          font-size: 1em;
          color: hsla(0, 0%, 18%, 0.8);
          font-family: inherit;
          font-weight: 600;
          padding: 0.8em 2em;
          box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.15);
          border-radius: 10px;
          border: none;
          background-color: white;
        }

        button:hover {
          box-shadow: 0 4px 14px hsla(0, 0%, 0%, 0.175);
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

        .ring {
          transform-origin: center;
          width: 2.5em;
          margin-top: 1.5em;
          animation: rotate 2s linear infinite;
        }

        .path {
          stroke: hsla(0, 0%, 18%, 0.85);
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
          animation: dash 1.5s ease-in-out infinite;
        }

        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes dash {
          0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
          }
          100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
          }
        }
      `}</style>
    </>
  );
}
