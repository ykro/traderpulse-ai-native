const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

class ApiClient {
  private baseUrl: string;
  constructor(baseUrl: string) { this.baseUrl = baseUrl; }

  async getMarketData() {
    const res = await fetch(`${this.baseUrl}/market`);
    return res.json();
  }

  async getPortfolio() {
    const res = await fetch(`${this.baseUrl}/portfolio`);
    return res.json();
  }

  async getGamification() {
    const res = await fetch(`${this.baseUrl}/gamification`);
    return res.json();
  }
}

export const api = new ApiClient(API_URL);
