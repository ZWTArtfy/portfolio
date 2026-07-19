export function isVideo(fn: string): boolean {
  return /\.(mp4|mov|webm|ogg)$/i.test(fn);
}

export function isImage(fn: string): boolean {
  return /\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(fn);
}

export function isPdf(fn: string): boolean {
  return /\.pdf$/i.test(fn);
}

export function isPptx(fn: string): boolean {
  return /\.pptx$/i.test(fn);
}

export function isMov(fn: string): boolean {
  return /\.mov$/i.test(fn);
}

export function getPath(folder: string, fn: string): string {
  return `${encodeURI(folder)}/${encodeURI(fn)}`;
}

export function getDisplayName(fn: string): string {
  return fn.replace(/\.[^.]+$/, '');
}
