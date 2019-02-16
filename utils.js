import mime from 'mime';

// prettier-ignore
const supportedExt = ['jpeg', 'jpg', 'png', 'tiff', 'tif', 'webp', 'mp4', 'mov', 'qt', 'wmv', 'avi', 'mkv', 'webm', 'wav', 'mp3', 'wma'];
export function verifyMIME(m) {
  const [type, subtype] = m.split('/');
  if (!(type === 'image' || type === 'video' || type === 'audio')) return false;
  if (!supportedExt.includes(mime.getExtension(m))) return false;
  return true;
}
