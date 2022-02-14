const MEDIA_SIZE = {
  large: 701,
  small: 319,
  mobile: 700,
};

export const MEDIA_QUERY = {
  large: `@media screen and (min-width: ${MEDIA_SIZE.large}px)`,
  small: `@media screen and (max-width: ${MEDIA_SIZE.small}px)`,
  mobile: `@media screen and (max-width: ${MEDIA_SIZE.mobile}px)`,
};

export const NAVIGATION_HEIGHT = 68;
