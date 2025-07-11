import axios from 'axios';
import { ExecuteDataSetOption } from '@zebras/screen_design_core/core';
type Config = {
  /** 路径 */
  url: string;
  /** 请求方法 */
  method: string;
  /** 请求参数 */
  params?: Record<string, any>;
  /** 请求头 */
  headers?: Record<string, any>;
  /** 请求主体 */
  body?: string;
};
export const request = async (option: ExecuteDataSetOption) => {
  const { restConfig } = option;
  const config = JSON.parse(restConfig || '{}') as Config;
  const d = await axios.request({
    url: config.url,
    method: config.method,
    params: config.params,
    headers: config.headers,
    data: JSON.parse(config.body || '{}'),
  });
  return {
    success: true,
    data: d.data,
  };
};
