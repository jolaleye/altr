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
          width: 42%;
          font-weight: 600;
          font-size: 0.8em;
          color: hsla(0, 0%, 18%, 0.9);
        }

        input {
          padding: 0.75em 1em;
          background-color: hsl(0, 0%, 97%);
          border-radius: 10px;
          border: none;
          font-family: inherit;
          font-weight: inherit;
          font-size: 1em;
          width: 100%;
          margin-top: 0.5em;
          color: hsla(0, 0%, 18%, 0.8);
        }

        input::placeholder {
          color: hsla(0, 0%, 18%, 0.5);
        }

        input:focus {
          outline: none;
        }
      `}</style>
    </label>
  );
}
