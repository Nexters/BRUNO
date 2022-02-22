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

export const getCookieFee = async () => {
  try {
    const { data } = await axios.get('/contract/cookies/prices/hammer');
    return data?.price || 5;
  } catch {
    return 5;
  }
};

export const getUserHammer = async (userId: string | number) => {
  try {
    const { data } = await axios.get(`/contract/hammers/users/${userId}/count`);
    return data?.amount;
  } catch {
    return false;
  }
};
