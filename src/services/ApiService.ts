import axios, {AxiosInstance} from 'axios';

class ApiService {
  private apiInstance: AxiosInstance;

  private constructor() {
    this.apiInstance = axios.create({
      baseURL: process.env.BASE_URL,
      timeout: 5000, 
    });
  }

  static getInstance(): ApiService {
    return new ApiService();
  }

  get = async (url: string, params?: any) => {
    try {
      const response = await this.apiInstance.get(url, {params});
      return response.data;
    } catch (error) {
      throw error;
    }
  }; 

  fetchProductsData = async () => {
    const endpoint = 'products.json';
   
    try {
      const productsData = await this.get(endpoint);
      return productsData;
    } catch (error) {
      throw error;
    }
  };
}

export default ApiService;
