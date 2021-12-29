import { IApiItem } from '@/types/api';
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';

const useFetch = function (api: IApiItem) {
  const [res, setRes] = useState<AxiosResponse | null>(null);

  const ax = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_PROTOCAL}://${process.env.NEXT_PUBLIC_API_URL}`,
    timeout: 10000,
  });

  const fetch = async function (options: { [key: string]: any } = {}) {
    const res = await ax.request({
      ...api,
      [api.method === 'get' ? 'params' : 'data']: options,
    });
    setRes(res);
    return res;
  };

  return {
    props: { fetch, res },
    utils: {
      setRes,
    },
  };
};

export default useFetch;
