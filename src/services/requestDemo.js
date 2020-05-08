import request from '@/utils/request';

export const requestDemoApi = () => {
  return request.get(`/requestDemo`);
};
