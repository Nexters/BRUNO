export enum KlipApiStatus {
  PREPARED = 'prepared',
  REQUESTED = 'requested',
  COMPLETED = 'completed',
  CANCELED = 'canceled',
  ERROR = 'error',
}

export enum Stage {
  INITIAL = 'inital',
  PREPARE = 'prepare',
  REQUEST = 'request',
  RESULT = 'result',
  REQUEST_FAIL = 'request_fail',
}

export enum CookieMethod {
  BUY_COOKIE = 'buyCookie',
  CHANGE_HAMMER_PRICE = 'changeHammerPrice',
  MINT_COOKIE_BY_HAMMER = 'mintCookieByHammer',
  MINT_COOKIE_BY_KLAYTN = 'mintCookieByKlaytn',
}

export enum CoinMethod {}
