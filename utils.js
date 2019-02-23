import mime from 'mime';
import { useEffect, useRef } from 'react';
import axios from 'axios';
import shortid from 'shortid';

// prettier-ignore
const supportedExt = ['jpeg', 'jpg', 'png', 'tiff', 'tif', 'webp', 'mp4', 'mov', 'qt', 'wmv', 'avi', 'mkv', 'webm', 'wav', 'mp3', 'wma'];
export function validateType(file) {
  const ext = mime.getExtension(file.type);
  return /^image|^video|^audio/.test(file.type) && supportedExt.includes(ext);
}

// react interval hook
export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    const tick = () => savedCallback.current();
    if (delay !== null) {
      let cycle = setInterval(tick, delay);
      return () => clearInterval(cycle);
    }
  }, [delay]);
}

// use api to fetch media
export async function fetch(url) {
  const { data } = await axios.get(`${process.env.apiURL}/fetch`, { params: { url }, responseType: 'blob' });
  const name = `${shortid.generate()}.${mime.getExtension(data.type)}`;
  const file = new File([data], name, { type: data.type });
  return file;
}
