import axios from 'axios';
import config from '@src/config';

axios.defaults.baseURL = config.baseApiUrl;
axios.defaults.headers.common['Content-Type'] = 'application/json';
