const axios = require('axios');
require('dotenv').config();

class ApiClient {
    constructor() {
      this.apiClient = axios.create({
        baseURL: process.env.BASE_URL,
        httpOptions: process.env.HTTP_OPTIONS
      });
    }
  
    async fetchCommonLicenses() {
        try {
          const response = await this.apiClient.get();
          console.log(response.data);
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