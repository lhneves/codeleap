import { css } from '@emotion/react';
import { mediaQuery, rem } from './/variables';

export const fonts = {
  h1Headline: {
    laptop: { size: 22, height: 26 },
    mobile: { size: 16, height: 12 },
  },
  h2Headline: {
    laptop: { size: 32, height: 40 },
    mobile: { size: 20, height: 28 },
  },
  s1Subtitle: {
    laptop: { size: 16, height: 19 },
    mobile: { size: 16, height: 19 },
  },
  s2Subtitle: {
    laptop: { size: 14, height: 16 },
    mobile: { size: 14, height: 16 },
  },
  p1Paragraph: {
    laptop: { size: 16, height: 24 },
    mobile: { size: 16, height: 24 },
  },
  p2Paragraph: {
    laptop: { size: 14, height: 22 },
    mobile: { size: 14, height: 18 },
  },
  s1Subtext: {
    laptop: { size: 12, height: 20 },
    mobile: { size: 12, height: 20 },
  },
  s2Subtext: {
    laptop: { size: 10, height: 14 },
    mobile: { size: 10, height: 14 },
  },
};

export default Object.entries(fonts).reduce((acc, [key, value]) => {
  const { laptop, mobile } = value;
  acc[key] = (weight = 400) => css`
    font-weight: ${weight};

    ${mobile
      ? `
    font-size: ${rem(mobile.size)};
    line-height: ${rem(mobile.height)};
    `
      : ''}

    ${laptop
      ? `${mediaQuery('laptop')} {
      font-size: ${rem(laptop.size)};
      line-height: ${rem(laptop.height)};
    }`
      : ''}
  `;
  return acc;
}, {});
