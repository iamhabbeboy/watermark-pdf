import axios, { AxiosAdapter } from 'axios';

class HttpRequest {
  constructor() {}

  get(url: string, data: object) {
    return axios.get(url, { params: data });
  }

  post(url: string, data: object) {
    return axios.post(url, data);
  }

  file(url: string, formData: Element, config: any) {
    config.headers = {
      'Content-Type': 'multipart/form-data'
    };
    return axios.post(url, formData, config);
  }
}

export { HttpRequest };
