/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosInstance, AxiosError } from "axios";
import { ApiResponse } from "../dtos/api-response-dto";

class ApiService {
  private api: AxiosInstance;

  constructor(baseURL: string, headers: Record<string, string> = {}) {
    this.api = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });
  }

  // Método GET
  async get<T>(url: string, params?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.get<T>(url, { params });
      return { data: response.data, error: null };
    } catch (error: any) {
      return this.handleError<T>(error);
    }
  }

  // Método POST (sem tipar o corpo da requisição)
  async post<U>(url: string, data: any): Promise<ApiResponse<U>> {
    try {
      const response = await this.api.post<U>(url, data);
      return { data: response.data, error: null };
    } catch (error: any) {
      return this.handleError<U>(error);
    }
  }

  // Método PUT
  async put<U>(url: string, data: any): Promise<ApiResponse<U>> {
    try {
      const response = await this.api.put<U>(url, data);
      return { data: response.data, error: null };
    } catch (error: any) {
      return this.handleError<U>(error);
    }
  }

  // Método DELETE
  async delete<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.delete<T>(url);
      return { data: response.data, error: null };
    } catch (error: any) {
      return this.handleError<T>(error);
    }
  }

  // Método para lidar com erros
  private handleError<T>(error: AxiosError): ApiResponse<T> {
    let message = "An unknown error occurred";

    if (error.response) {
      message = `Error ${error.response.status}: ${error.response.data}`;
    } else if (error.request) {
      message = "No response received from server";
    } else {
      message = error.message;
    }

    console.error("API Error:", message);
    return { data: null, error: message };
  }
}

export const APIURL = "http://localhost:8989/api";
const apiService = new ApiService(APIURL);

export default apiService;
