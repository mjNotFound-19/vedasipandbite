export const buildSrcSet = (src: string, widths: number[] = [600, 1200]) => {
  const normalized = src.replace(/w=\d+/, 'w={width}');
  return widths
    .map((width) => `${normalized.replace('{width}', String(width))} ${width}w`)
    .join(', ');
};

export const buildSizedSrc = (src: string, width: number) =>
  src.replace(/w=\d+/, `w=${width}`);
