import { env } from 'process';
import devConfig from './dev.config';
import realConfig from './real.config';

const getConfig = () => {
  if (env.NODE_ENV === 'production') return realConfig;
  return devConfig;
};

export default {
  ...getConfig(),
};
