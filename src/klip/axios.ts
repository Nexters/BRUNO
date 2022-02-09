import axios from 'axios';

export const postKlipAuth = async () =>
  axios.post(
    'https://a2a-api.klipwallet.com/v2/a2a/prepare',
    {
      bapp: {
        name: 'COOKIEPANG',
      },
      callback: {
        success: 'mybapp://klipwallet/success',
      },
      type: 'auth',
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

export const getKlipResult = async (reqKey: string) =>
  axios.get('https://a2a-api.klipwallet.com/v2/a2a/result', {
    params: {
      request_key: reqKey,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });
