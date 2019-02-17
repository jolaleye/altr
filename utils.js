import mime from 'mime';
import { useEffect, useRef } from 'react';

// prettier-ignore
const supportedExt = ['jpeg', 'jpg', 'png', 'tiff', 'tif', 'webp', 'mp4', 'mov', 'qt', 'wmv', 'avi', 'mkv', 'webm', 'wav', 'mp3', 'wma'];
export function validateMIME(type) {
  const ext = mime.getExtension(type);
  if (!/^image|^video|^audio/.test(type) || !supportedExt.includes(ext)) return false;
  return true;
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
