import mime from 'mime';
import { useEffect, useRef } from 'react';

// prettier-ignore
const supportedExt = ['jpeg', 'jpg', 'png', 'tiff', 'tif', 'webp', 'mp4', 'mov', 'qt', 'wmv', 'avi', 'mkv', 'webm', 'wav', 'mp3', 'wma'];
export function validateType(file) {
  const ext = mime.getExtension(file.type);
  return /^image|^video|^audio/.test(file.type) && supportedExt.includes(ext);
}

export function validateSize(file) {
  return file.size < 10000000; // 10mb
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
