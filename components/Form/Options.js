import ImageOptions from './ImageOptions';

export default function Options({ file, back }) {
  let options;
  if (/^image/.test(file.type)) options = <ImageOptions />;
  else if (/^video/.test(file.type)) return;
  else if (/^audio/.test(file.type)) return;

  return (
    <>
      <p onClick={back}>
        <i className="uil uil-angle-left" />
        back
      </p>
      {options}

      <style jsx>{`
        p {
          text-align: left;
          display: flex;
          align-items: center;
          font-size: 0.8em;
        }

        p:hover {
          cursor: pointer;
        }

        p i {
          font-size: 1.2em;
        }
      `}</style>
    </>
  );
}
