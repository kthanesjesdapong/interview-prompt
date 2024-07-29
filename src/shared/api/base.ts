import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

class ApiInstance {
  public axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public async get<TDataResponse = any, TReqData = any>(
    url: string,
    config?: AxiosRequestConfig<TReqData>
  ): Promise<TDataResponse | never> {
    try {
      const res = await this.axios.get(url, config);
      return res.data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e);
      }
      throw e;
    }
  }
}

export const api = new ApiInstance();
