import axios, { AxiosInstance, AxiosResponse } from 'axios';

let client: AxiosInstance;
export default client = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
  headers: {
    'Content-Type': 'application/json',
  }
});

client.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    const data = response.data;
    return { data, ...response.data };//ここの処理は意味が分からないがこうでないと取得できない。
  }
);