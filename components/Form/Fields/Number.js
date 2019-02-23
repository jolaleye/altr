import { colors } from '../../../theme';

export default function Number({ label, placeholder, value, onChange, min }) {
  return (
    <label>
      {label}
      <input type="number" placeholder={placeholder} value={value} onChange={onChange} min={min} />

      <style jsx>{`
        label {
          display: flex;
          flex-flow: column nowrap;
          align-items: flex-start;
          width: 43%;
          font-weight: 600;
          font-size: 0.8em;
        }

        input {
          padding: 0.75em 1em;
          background-color: ${colors.lightest};
          border-radius: 10px;
          border: none;
          font-family: inherit;
          font-weight: inherit;
          font-size: 1em;
          width: 100%;
          margin-top: 0.5em;
          color: ${colors.dark};
        }

        input::placeholder {
          color: ${colors.lightGray};
        }

        input:focus {
          outline: none;
        }
      `}</style>
    </label>
  );
}
