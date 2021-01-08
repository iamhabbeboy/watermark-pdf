import axios, { AxiosAdapter } from 'axios';

class HttpRequest {
  constructor() {}

  get() {
    // return axios.get();
  }

  post() {
    // return axios.post();
  }

  file(url: string, formData: Element, config: any) {
    config.headers = {
      'Content-Type': 'multipart/form-data'
    };
    return axios.post(url, formData, config);
  }
}

export { HttpRequest };
