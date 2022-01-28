import CaverExtKAS from 'caver-js-ext-kas';

import config from '@src/config';

const caver = new CaverExtKAS(
  config.chainId,
  config.accessKeyId,
  config.secretAccessKey,
);

caver.initWalletAPI(config.chainId, config.accessKeyId, config.secretAccessKey);

export default caver;
