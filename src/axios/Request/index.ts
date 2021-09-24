import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import Qs from "qs";

// const TIMEOUT_MILLS = 200000;
// let call;

let axiosInterceptor: any = null;

export let axiosInstance: AxiosInstance;

export enum Method {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

interface RequestParams {
  method: Method;
  url: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  queryParams?: object | null;
  body?: FormData | unknown | string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  headers?: object;
  isMultipart?: boolean;
}

export const request = (params: RequestParams) => {
  const { method, url, body, headers, isMultipart, queryParams } = params;

  const config: AxiosRequestConfig = {
    paramsSerializer: (params) => {
      // eslint-disable-next-line
      return Qs.stringify(params, { arrayFormat: "brackets" });
    },
  };

  // call = axios.CancelToken.source();
  // config.cancelToken = call.token;

  if (headers) {
    config.headers = {
      ...config.headers,
      ...headers,
    };
  }
  if (isMultipart) {
    config.headers = {
      ...config.headers,
      "content-type": "multipart/form-data",
    };
  }
  if (queryParams) {
    config.params = {
      ...config.params,
      ...queryParams,
    };
  }

  axiosInstance = axios.create(config);

  if (!!axiosInterceptor || axiosInterceptor === 0) {
    axiosInstance.interceptors.response.eject(axiosInterceptor);
  }

  axiosInterceptor = axiosInstance.interceptors.response.use(
    (res) => {
      //TODO
      return res;
    },
    (error) => {
      //TODO
      return Promise.reject(error);
    }
  );

  switch (method) {
    case Method.GET:
      return axiosInstance.get(url, config);
    case Method.POST:
      return axiosInstance.post(url, body, config);
    case Method.PUT:
      return axiosInstance.put(url, body, config);
    case Method.DELETE:
      return axiosInstance.delete(url, config);
    default:
      return axiosInstance.get(url, config);
  }
};
