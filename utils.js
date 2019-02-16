import mime from 'mime';

// prettier-ignore
const supportedExt = ['jpeg', 'jpg', 'png', 'tiff', 'tif', 'webp', 'mp4', 'mov', 'qt', 'wmv', 'avi', 'mkv', 'webm', 'wav', 'mp3', 'wma'];
export function validateMIME(type) {
  const ext = mime.getExtension(type);
  if (!/^image|^video|^audio/.test(type) || !supportedExt.includes(ext)) return false;
  return true;
}
