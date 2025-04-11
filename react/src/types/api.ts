import { AxiosError } from "axios";

export interface ApiErrorDetail {
  type: string;
  error: string;
  detail: string;
}

export interface ApiErrorResponse {
  instance?: string;
  traceId?: string;
  errors: ApiErrorDetail[];
}

export type HttpApiError = AxiosError & {
  apiError: ApiErrorResponse;
};
