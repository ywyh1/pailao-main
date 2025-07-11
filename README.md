# README

`zebras` 最佳实践模板项目，本项目使用 typescript 替换传统的 js 完成，这也是`zebras`最推荐的开发方式，更多功能参考 [Zebras 官方文档](http://docs.guide.fes3.msdi.cn)

## 项目依赖安装

**强烈推荐使用`pnpm`安装和运行项目**  
`pnpm install`

## 项目启动

`pnpm run dev`

## 最佳实践内容

> 对应文档请参阅[最佳实践](http://docs.guide.fes3.msdi.cn/guide/best_practices/get_code)

### 状态库

约定在当前路由目录下新建 models 目录并定义 Model

```bash
.
├── src
│   ├── models
│   │      └── todos.ts
│   └── pages
├── zebras.config.ts
└── ...
```

相关代码可以参阅`./models/global.ts`

### 主题切换

经调研很多项目组都有热换肤的需求，zebras 推荐用户采用（less | sass | css in js）+ css3 变量结合的方式来实行热换肤[最佳实践-主题样式](http://docs.guide.fes3.msdi.cn/guide/best_practices/style)。相关代码可参阅`./src/components/Theme/index.tsx`

### 权限

权限是一个系统比较核心的功能，具体实现请参阅 [最佳实践-权限](http://docs.guide.fes3.msdi.cn/guide/best_practices/auth)  
相关代码可参阅`./src/auth.ts`

### 请求

`zebras`内置了一套较为完善的请求方案。它基于 fetch、 web worker 及 react-query 提供了一套统一的网络请求方案。  
请参阅 [最佳实践-请求](http://docs.guide.fes3.msdi.cn/guide/best_practices/request)

### mockjs

`Zebras`提供了开箱即用的 Mock 功能，能够用方便简单的方式来完成 Mock 数据的设置。  
请参阅 [最佳实践-mock](http://docs.guide.fes3.msdi.cn/guide/best_practices/mock)  
相关代码可参阅`./mock/*`以及`./src/services/*`

### 自定义 404,401，loading 组件

请参阅 [zebras 基础-自定义页面](http://docs.guide.fes3.msdi.cn/guide/zebras_basic/customize)  
相关代码可参阅`./src/pages/(401|404).ts`

### 数据预加载

请参阅 [最佳实践-数据预加载](http://docs.guide.fes3.msdi.cn/guide/best_practices/preload)  
相关代码可参阅`./src/pages/guide/index.tsx`

### 国际化

`zebras`提供开箱即用的多语言解决方案，无需再引入第三方插件。请参阅 [最佳实践-多语言](http://docs.guide.fes3.msdi.cn/guide/best_practices/i18n)  
相关代码可参阅`./src/pages/login/locale.json`
