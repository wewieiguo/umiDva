#  WEB项目 

蒙东电力远程视频会商项目

## 启动项目
```cmd
# 推荐使用yarn
# 安装依赖
yarn 
# 或
npm i
# 启动项目
yarn start 
# 或
npm run start
# 打包项目
yarn build 
#或
npm run build
```
## 相关框架
快速了解链接: [umi](https://umijs.org/zh/guide/) + [antd](https://ant.design/index-cn) + [dva](https://dvajs.com/)

基于 [react](https://react.docschina.org/docs/getting-started.html)

## 项目结构

```
├── dist/                          // 默认的 build 输出目录
├── mock/                          // mock 文件所在目录，基于 express
├── public/                        // 公有文件 如:favicon.ico
├── config/
    ├── config.js                  // umi 配置
    ├── plugin.config.js           // 插件 配置
    ├── routes.config.js           // 路由 配置
└── src/                           // 源码目录，可选
    ├── assets/                    // 静态资源目录
    ├── components/                // 公共组件目录
    ├── constant                   // 常量目录
        ├── index.js               // 常量定义
    ├── hooks/                     // 自定义hooks目录
    ├── layouts/index.js           // 全局布局
    ├── models/                    // redux store 目录
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── document.ejs           // HTML 模板
        ├── 404.jsx                 // 404 页面
    ├── services/                  // 接口请求方法目录
    ├── styles/                    // 基础公共样式目录
        ├── reset/                 // 重置默认样式目录
        ├── base/                  // less 基础变量目录
            ├── baseMixin.less     // 基础mixin
            ├── baseVars.less      // 基础变量              
    ├── utils/                     // 工具函数目录
        ├── config.js              // 配置相关
        ├── libs.js                // 通用工具函数
        ├── request.js             // 请求基础配置以及拦截器相关
    ├── app.js                     // 运行时配置文件
    ├── global.less                // 约定的全局样式文件，自动引入
    ├── global.js                  // 可以在这里加入 polyfill
├── .env                           // 环境变量
└── package.json
```
## 开发
- 推荐同一开发工具：`VS Code`, [编辑器基础插件及配置](https://note.youdao.com/ynoteshare1/index.html?id=09a799daf8cec34f13d55ffc03e39a99&type=note)
- 路由使用配置式路由，在config目录中的`routes.config.js`文件中
- 在一个稳定版本提交发布后，升级提交tag
- 基础开发规范: [内部参考链接](http://confluence.aseit.cn/pages/viewpage.action?pageId=20545625)
- 每个文件请使用vscode插件`Vscode-fileheader`添加头部注释，表明文件的作者author，修改者author与文件内容概述des
