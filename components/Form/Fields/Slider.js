export default function Slider({ label, value, onChange, min, max }) {
  return (
    <label>
      {label}
      <div className="wrapper">
        <span>{value}</span>
        <input type="range" value={value} onChange={onChange} min={min} max={max} />
      </div>

      <style jsx>{`
        label {
          display: flex;
          flex-flow: column nowrap;
          align-items: flex-start;
          width: 43%;
          font-weight: 600;
          font-size: 0.8em;
          color: hsla(0, 0%, 18%, 0.8);
        }

        .wrapper {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          margin-top: 1em;
          width: 100%;
        }

        span {
          color: hsla(0, 0%, 18%, 0.8);
        }

        input {
          width: 100%;
          appearance: none;
          border-radius: 10px;
          background-color: hsla(0, 0%, 18%, 0.6);
          height: 2px;
          margin-left: 0.75em;
        }

        input:focus {
          outline: none;
        }

        input::-webkit-slider-thumb {
          appearance: none;
          cursor: pointer;
          border-radius: 50%;
          width: 1.5em;
          height: 1.5em;
          background-color: white;
          border: 2px solid hsla(0, 0%, 18%, 0.6);
        }
      `}</style>
    </label>
  );
}
