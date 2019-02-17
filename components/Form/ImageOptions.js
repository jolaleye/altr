import { useState } from 'react';
import Number from './Fields/Number';
import Select from './Fields/Select';
import Slider from './Fields/Slider';

export default function ImageOptions() {
  const [format, setFormat] = useState('jpg');
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [quality, setQuality] = useState(90);
  const [compression, setCompression] = useState(1);

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
        <Number label={'Width'} placeholder={'600'} value={width} onChange={e => setWidth(e.target.value)} min={1} />
        <Number label={'Height'} placeholder={'400'} value={height} onChange={e => setHeight(e.target.value)} min={1} />
      </div>
      {/jpg|tiff|webp/.test(format) && (
        <div className="row">
          <Slider label={'Quality'} value={quality} onChange={e => setQuality(e.target.value)} min={1} max={100} />
        </div>
      )}
      {format === 'png' && (
        <div className="row">
          {/* prettier-ignore */}
          <Slider label={'Compression'} value={compression} onChange={e => setCompression(e.target.value)} min={0} max={7} />
        </div>
      )}

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
