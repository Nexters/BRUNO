import axios from 'axios';
import config from '@src/config';

export const getCategoryist = () =>
  axios.get(`${config.baseApiUrl}/categories`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
