import { useState } from 'react';
import TextInput from './Fields/TextInput';
import Select from './Fields/Select';
import Slider from './Fields/Slider';

export default function ImageOptions() {
  const [format, setFormat] = useState();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [quality, setQuality] = useState(90);

  return (
    <div className="options">
      <div className="row">
        <Select label={'Format'} value={format} onChange={e => setFormat(e.target.value)}>
          <option value="jpg">jpg</option>
          <option value="png">png</option>
          <option value="webp">webp</option>
          <option value="tiff">tiff</option>
        </Select>
      </div>
      <div className="row">
        <TextInput label={'Width'} value={width} onChange={e => setWidth(e.target.value)} />
        <TextInput label={'Height'} value={height} onChange={e => setHeight(e.target.value)} />
      </div>
      <div className="row">
        <Slider label={'Quality'} value={quality} onChange={e => setQuality(e.target.value)} min={1} max={100} />
      </div>

      <style jsx>{`
        .options {
          margin-top: 1.5em;
        }

        .row {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5em;
        }
      `}</style>
    </div>
  );
}
