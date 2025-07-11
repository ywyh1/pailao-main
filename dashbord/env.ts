export const ENV_VARIABLE_DATA = {};
/** 资源库地址 （根据实际情况配置） */
const _RESOURCE_STATIC_SERVER_PATH_: Record<string, string> = {
  dev: '', //'http://csfwq.msdi.cn:7000'
  test: '', //'http://csfwq.msdi.cn:7000'
  prod: '', //'http://attachments.gis.msdi.cn:6786'
};
/** 环境 */
export const APP_ENV = Reflect.get(window, '__ZEBRAS_GLOBAL_VARIABLES__').env;

export const RESOURCE_PATH = _RESOURCE_STATIC_SERVER_PATH_[APP_ENV];
