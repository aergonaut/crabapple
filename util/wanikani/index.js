const API_HOST = "https://www.wanikani.com/api/v2";

class WKClient {
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async get(path: string) {
    try {
      const options = {
        headers: {
          Authorization: `Bearer ${this.apiKey}`
        }
      };
      let response = await fetch(`${API_HOST}/${path}`, options);
      let responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      // lol
    }
  }

  async vocabularyItems() {
    try {
      
    }
  }
}

export { WKClient };
