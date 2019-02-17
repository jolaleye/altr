import { useState } from 'react';

import Number from './Fields/Number';
import Select from './Fields/Select';
import Slider from './Fields/Slider';

export default function ImageOptions({ submit }) {
  const [format, setFormat] = useState('jpg');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [quality, setQuality] = useState(90);
  const [compression, setCompression] = useState(0);

  return (
    <div className="options">
      <div className="options__row">
        <Select label="Format" value={format} onChange={e => setFormat(e.target.value)}>
          <option value="jpg">jpg</option>
          <option value="png">png</option>
          <option value="webp">webp</option>
          <option value="tiff">tiff</option>
        </Select>
      </div>
      <div className="options__row">
        <Number label="Width (px)" placeholder="600" value={width} onChange={e => setWidth(e.target.value)} min="1" />
        {/* prettier-ignore */}
        <Number label="Height (px)" placeholder="400" value={height} onChange={e => setHeight(e.target.value)} min="1" />
      </div>
      {/jpg|tiff|webp/.test(format) && (
        <div className="options__row">
          <Slider label="Quality" value={quality} onChange={e => setQuality(e.target.value)} min="1" max="100" />
        </div>
      )}
      {format === 'png' && (
        <div className="options__row">
          {/* prettier-ignore */}
          <Slider label={'Compression'} value={compression} onChange={e => setCompression(e.target.value)} min="0" max="7" />
        </div>
      )}

      <button className="options__submit" onClick={() => submit({ format, width, height, quality, compression })}>
        Submit
      </button>
    </div>
  );
}
