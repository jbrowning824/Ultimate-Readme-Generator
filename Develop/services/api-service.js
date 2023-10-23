const axios = require('axios');

class ApiClient {
    constructor(baseURL, httpOptions) {
      this.apiClient = axios.create({
        baseURL,
        httpOptions
      });
    }
  
    async fetchCommonLicenses() {
        try {
            const response = await this.apiClient.get();
            return response.data;
          } catch (error) {
            throw error;
          }
    }

    async fetchRequestedLicense(licenese) {
        try {
            const response = await this.apiClient.get('/' + licenese);
            return response.data;
          } catch (error) {
            throw error;
          }
    }
  }

module.exports = ApiClient;