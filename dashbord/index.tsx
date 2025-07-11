import React from 'react';
import type {
  DataSet,
  DataSetType,
  ExecuteDataSetOption,
  ScreenDocument,
  ScreenPage,
  IComponentData,
} from '@zebras/screen_design_core/core';
// 引入上下文
import { EditorProvide } from '@zebras/screen_design_core/components';
// 引入渲染器
import { PreviewView } from '@zebras/screen_design_core/preview';
// 引入数据
import DOCUMENT_DATA from './data/DOCUMENT_DATA.json';
import PAGE_LIST_DATA from './data/PAGE_LIST_DATA.json';
import DATA_SET_DATA from './data/DATA_SET_DATA.json';
import COMPONENT_DATA from './data/COMPONENT_DATA.json';
import { ENV_VARIABLE_DATA, RESOURCE_PATH } from './env';
import { request } from './request';
//实现接口
class ScreenGettingServiceImpl {
  public resouceUrl = RESOURCE_PATH;
  public async getDocumentConfig(): Promise<ScreenDocument> {
    return DOCUMENT_DATA as unknown as ScreenDocument;
  }
  public async getPageList(): Promise<ScreenPage[]> {
    return PAGE_LIST_DATA as unknown as ScreenPage[];
  }
  public async getDataSet(id: string): Promise<DataSet<DataSetType>> {
    return Reflect.get(DATA_SET_DATA, id) as unknown as DataSet<DataSetType>;
  }
  public async executeDataSet(option: ExecuteDataSetOption): Promise<any> {
    return request(option);
  }
  public async getEnvVariableList(): Promise<Record<string, any>> {
    return ENV_VARIABLE_DATA as unknown as Record<string, any>;
  }
  public async getDocumentComponents(): Promise<IComponentData[]> {
    return COMPONENT_DATA as unknown as IComponentData[];
  }
}
const services = new ScreenGettingServiceImpl() as any;

export default () => {
  return (
    <EditorProvide gettingService={services} preview>
      <PreviewView />
    </EditorProvide>
  );
};
