import ImageOptions from './ImageOptions';

export default function Options({ file, submit }) {
  let options;
  if (/^image/.test(file.type)) options = <ImageOptions submit={submit} />;
  else if (/^video/.test(file.type)) return;
  else if (/^audio/.test(file.type)) return;

  return options;
}
