import { extend } from 'umi-request';
import { message } from 'antd';
import router from 'umi/router';

import { REQUEST_PREFIX } from '@/utils/config';

// 开发环境统一请求前缀
// todo: 部署时注意这里的前缀修改
const prefix = REQUEST_PREFIX.NORMAL;

/**
 * 服务器code字典
 */
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const errorHandler = error => {
  const { response = {} } = error;
  let errortext = codeMessage[response.status] || response.statusText;
  const { status } = response;
  // console.log(`response${JSON.stringify(response)}`)
  if (status === 400 && !window.sessionStorage.getItem('token')) {
    errortext = '账户名或密码错误';
  }
  if (status === 401) {
    message.error({
      content: `登录已过期，请重新登录`,
      duration: 2,
    });
    window.sessionStorage.clear();
    router.replace({
      pathname: '/login',
    });
    return;
  }
  if (errortext) {
    message.error({
      content: errortext,
    });
  }
  return error;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  prefix: prefix,
  // credentials: 'include', // 默认请求是否带上cookie
  timeout: 30000000, // 默认请求超时时间
});

// request拦截器, 改变url 或 options.
request.interceptors.request.use((url, options) => {
  let temp = url;
  if (temp.indexOf('/mcu_api') > 0) {
    temp = temp.replace(`${REQUEST_PREFIX.NORMAL}/mcu_api`, REQUEST_PREFIX.MCU);
  }
  // const user = JSON.parse(window.sessionStorage.getItem('user')) || {};
  return {
    // url: options.mock ? url : `${url}`,
    url: options.mock ? temp : `${temp}`,
    options: {
      ...options,
      // headers: { ...options.headers, userId: user.id },
      headers: { ...options.headers },
    },
  };
});

// response拦截器, 处理response
request.interceptors.response.use(async response => {
  const { code, msg } = await response.clone().json();
  if (code - 400 > 0) {
    message.error({
      content: msg || codeMessage[code],
    });
  }
  return response;
});

export default request;
