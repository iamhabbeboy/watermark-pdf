const axios = require("axios");

export class Request {
  constructor(payload) {
    this.url = payload.url;
    this.data = payload.data || {};
    this.method = payload.method || "POST";
    this.headers = payload.headers || { "content-type": "application/json" };
  }

  get() {
    return axios({
      url: this.url,
      data: this.data,
      method: this.method,
      headers: this.headers,
    });
  }
}
