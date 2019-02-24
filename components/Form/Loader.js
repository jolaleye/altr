import { colors } from '../../theme';

export default function Loader({ upload, download }) {
  return (
    <svg className={`${upload && 'upload'} ${download && 'download'}`} viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10" />

      <style jsx>{`
        svg {
          z-index: 2;
          transform-origin: center;
          animation: rotate 2s linear infinite;
          width: 3em;
        }

        svg.upload {
          width: 1.6em;
          margin: 0 0.8em;
        }

        svg.download {
          width: 2.5em;
          margin-top: 1.5em;
        }

        circle {
          stroke: ${colors.dark};
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
          animation: dash 1.5s ease-in-out infinite;
        }

        svg.upload circle {
          stroke-width: 3;
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
    </svg>
  );
}
