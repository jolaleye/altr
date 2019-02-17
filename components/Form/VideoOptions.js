import { useState } from 'react';

import Number from './Fields/Number';
import Select from './Fields/Select';

export default function VideoOptions({ submit }) {
  const [format, setFormat] = useState('mp4');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  return (
    <div className="options">
      <div className="options__row">
        <Select label="Format" value={format} onChange={e => setFormat(e.target.value)}>
          <option value="mp4">mp4</option>
          <option value="mov">mov</option>
          <option value="webm">webm</option>
          <option value="wmv">wmv</option>
          <option value="avi">avi</option>
          <option value="mkv">mkv</option>
        </Select>
      </div>
      <div className="options__row">
        <Number label="Width (px)" placeholder="600" value={width} onChange={e => setWidth(e.target.value)} min="1" />
        {/* prettier-ignore */}
        <Number label="Height (px)" placeholder="400" value={height} onChange={e => setHeight(e.target.value)} min="1" />
      </div>
      <div className="options__row">
        <Number label="Start (s)" placeholder="0" value={start} onChange={e => setStart(e.target.value)} min="0" />
        <Number label="End (s)" placeholder="5" value={end} onChange={e => setEnd(e.target.value)} min="0" />
      </div>

      <button className="options__submit" onClick={() => submit({ format, width, height, start, end })}>
        Submit
      </button>
    </div>
  );
}
