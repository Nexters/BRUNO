import { web2app } from '@src/utils/web2app';

/*
 * urlScheme : iphone custom scheme
 * intentURI : android intent URI
 * appName : application Name (ex. facebook, twitter, daum)
 * storeURL : app store URL
 * willInvokeApp : function for logging
 * onAppMissing : fallback function (default. move to appstore)
 * onUnsupportedEnvironment : fallback function
 */

export const openDeepLink = (reqKey: string) => {
  web2app({
    urlScheme: `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${reqKey}`,
    intentURI: `intent://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${reqKey}#Intent;scheme=kakaotalk;package=com.kakao.talk;end`,
    appName: 'COOKIEPANG',
    storeURL: 'itms-apps://itunes.apple.com/app/id362057947',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    willInvokeApp: () => {},
  });
};
