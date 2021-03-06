import { colors } from '../../../theme';

export default function Select({ children, label, value, onChange }) {
  return (
    <label>
      {label}
      <div>
        <select value={value} onChange={onChange}>
          {children}
        </select>
        <i className="uil uil-angle-down" />
      </div>

      <style jsx>{`
        label {
          display: flex;
          flex-flow: column nowrap;
          align-items: flex-start;
          width: 43%;
          font-weight: 600;
          font-size: 0.8em;
        }

        div {
          display: flex;
          padding: 0.75em 1em;
          background-color: ${colors.lightest};
          border-radius: 10px;
          overflow: hidden;
          font-weight: 600;
          font-size: 0.8em;
          width: 100%;
          font-size: 1em;
          color: ${colors.dark};
          text-align: left;
          margin-top: 0.5em;
        }

        div i {
          font-size: 1.2em;
        }

        select {
          font-family: inherit;
          font-weight: inherit;
          font-size: inherit;
          appearance: none;
          border: none;
          color: inherit;
          width: 100%;
          background-color: transparent;
        }

        select:focus {
          outline: none;
        }
      `}</style>
    </label>
  );
}
