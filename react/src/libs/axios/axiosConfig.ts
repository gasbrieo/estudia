import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

import { ApiErrorResponse } from "@/types/api";

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (error: AxiosError): Promise<AxiosResponse> => {
  let apiError = {
    errors: [
      {
        type: "InternalServerError",
        error: "Unexpected error",
        detail: error.message || "Something went wrong while processing the request.",
      },
    ],
  } as ApiErrorResponse;

  if (error.response?.data) {
    apiError = error?.response?.data as ApiErrorResponse;
  }

  return Promise.reject({
    ...error,
    apiError,
  });
};

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(onRequest, onRequestError);
apiClient.interceptors.response.use(onResponse, onResponseError);

export { apiClient };
