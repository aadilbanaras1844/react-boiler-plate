

import { apiHost } from 'settings';

const getAuth = () => {
  return {};
}

class ApiService {
  constructor() {
    this.apiUrl = `${apiHost}/api/v1`;
  }

  post = async (url, body, needAuth, token) => {
    try {
      const resp = await this.makeRequest({
        url,
        method: 'POST',
        body,
        needAuth,
        token
      });
      return this.handleResponse(resp);
    } catch (error) {
      //   console.log(error)
      this.handleError(error);
      return Promise.reject(error);
    }
  };

  patch = async (url, body, needAuth, token) => {
    try {
      const resp = await this.makeRequest({
        url,
        method: 'PATCH',
        body,
        needAuth,
        token
      });
      return this.handleResponse(resp);
    } catch (error) {
      // console.log(error)
      this.handleError(error);
      return Promise.reject(error);
    }
  };

  get = async (url, needAuth = true) => {
    try {
      const resp = await this.makeRequest({
        url,
        needAuth
      });
      return this.handleResponse(resp);
    } catch (error) {
      this.handleError(error);
      return Promise.reject(error);
    }
  };

  delete = async (url) => {
    try {
      const resp = await this.makeRequest({
        url,
        method: 'DELETE'
      });
      return this.handleResponse(resp);
    } catch (error) {
      this.handleError(error);
      return Promise.reject(error);
    }
  };

  handleResponse = ({ result, error, message } = {}) => {
    if (result) {
      return {
        result,
        message
      };
    }
    if (error && error.status === 401) {
      this.logoutUser();
    }
    return Promise.reject({
      ...error,
      ...{ message }
    });
  };

  logoutUser() {
    // removeUser();
    // history.push('/login');
    window.location.reload();
  }

  handleError = (error) => {
    console.log('error => ', error);
  };

  makeRequest = async ({
    url = '',
    method = 'GET',
    body = null,
    needAuth = true  }) => {
    try {
      const fullUrl = `${this.apiUrl}/${url}`;

      let headers = {
        'Content-Type': 'application/json'
      };

      if (needAuth) {
        const { token } = getAuth();
        headers = {
          ...headers,
          Authorization: `Bearer ${token}`
        };
      }

      const options = {
        method,
        headers
      };

      if (method !== 'GET' && body) {
        options.body = JSON.stringify(body || {});
      }
      const response = await fetch(fullUrl, options);

      return response.json();
    } catch (error) {
      //   console.log(error, error.message)
      return Promise.reject(error);
    }
  };
}

export default ApiService;
