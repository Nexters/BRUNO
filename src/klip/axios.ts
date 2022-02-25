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

export const getApproval = async (userId: string | number | null) => {
  if (!userId) return false;

  try {
    const { data } = await axios.get(`/contract/hammers/users/${userId}/approve`);
    return data?.answer || false;
  } catch {
    return false;
  }
};

export const getCookieFee = async () => {
  try {
    const { data } = await axios.get('/contract/cookies/prices/hammer');
    return data?.price || 5;
  } catch {
    return 5;
  }
};

export const getCookiePrice = async (nftTokenId: number) => {
  try {
    const { data } = await axios.get(`/contract/cookies/${nftTokenId}/price`);
    return data?.price;
  } catch {
    return false;
  }
};

export const getUserHammer = async (userId: string | number) => {
  try {
    const { data } = await axios.get(`/contract/hammers/users/${userId}/balance`);
    return (data?.balance || 0) / 10 ** 18;
  } catch {
    return 0;
  }
};
