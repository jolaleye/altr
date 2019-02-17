import { useState } from 'react';

import Number from './Fields/Number';
import Select from './Fields/Select';

export default function AudioOptions({ submit }) {
  const [format, setFormat] = useState('mp3');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  return (
    <div className="options">
      <div className="options__row">
        <Select label="Format" value={format} onChange={e => setFormat(e.target.value)}>
          <option value="mp3">mp3</option>
          <option value="wav">wav</option>
          <option value="webm">webm</option>
          <option value="wma">wma</option>
          <option value="avi">avi</option>
        </Select>
      </div>
      <div className="options__row">
        <Number label="Start (s)" placeholder="0" value={start} onChange={e => setStart(e.target.value)} min="0" />
        <Number label="End (s)" placeholder="5" value={end} onChange={e => setEnd(e.target.value)} min="0" />
      </div>

      <button className="options__submit" onClick={() => submit({ format, start, end })}>
        Submit
      </button>
    </div>
  );
}
