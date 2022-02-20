import axios, { AxiosError } from 'axios';

export const isSuccess = (status: number) => Math.floor(status / 100) === 2;

export const getErrorStatus = (error: any) => {
  if (axios.isAxiosError(error)) {
    const serverError = error as AxiosError;
    if (serverError && serverError.response) {
      return serverError.response.status;
    }
  }
  return 500;
};
