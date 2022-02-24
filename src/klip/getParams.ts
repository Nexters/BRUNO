import { CookieInfo } from '@src/pages/CreateCookiePage';
import { CookieMethod, HammerMethod } from './types';
import { COOKIE_IMAGE_URLS } from './const';

const getMintCookieParams = (data: CookieInfo) => {
  const { title, contents, category, hammer } = data;
  const imageUrl = COOKIE_IMAGE_URLS[category] || COOKIE_IMAGE_URLS.PINK;
  return `["${title}","${contents}","${imageUrl}","${category}",${hammer}]`;
};

const FUNC_METHODNAME_MAP: {
  [key in string]: (data: any) => void;
} = {
  [CookieMethod.MINT_COOKIE_BY_HAMMER]: getMintCookieParams,
};

export const getParams = (data: any, methodName: CookieMethod | HammerMethod) => {
  const getParamFunc = FUNC_METHODNAME_MAP[methodName];
  if (!getParamFunc) return null;
  return getParamFunc(data);
};
