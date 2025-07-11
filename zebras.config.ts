export default {
  type: 'base',
  domain: 'pailao',
  name: 'pailao-main',
  port: '8000',
  platform: 'web',
  framework: 'react',
  imports: [
    //引入大屏设计组件库
    { name: 'screen_design_comp' },
    //引入大屏核心组件库
    { name: 'screen_design_core' },
    //引入usm3组件库 (如果已引入usm3组件库，则无需再次引入)
    { name: 'usm3_component' },
    // 引入giscore组件 (如果已引入组件库，则无需再次引入)
    { name: 'gis_core_comp' },
  ],
};
