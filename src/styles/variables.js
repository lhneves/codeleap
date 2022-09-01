export const breakpoints = {
  largeMobile: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  wide: 1440,
};

export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  primary: '#999999',
  secondary: '#777777',
  tertiary: '#CCCCCC'
}

export const rem = (pixels) => `${pixels / 10}rem`;

export const mediaQuery = (n) => {
  const bpArray = Object.keys(breakpoints).map((key) => [
    key,
    breakpoints[key],
  ]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};
