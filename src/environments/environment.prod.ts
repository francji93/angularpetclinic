import { common } from './common';

export const environment = {
  ...common,
  name : 'prod',
  production: true,
  isDebugMode: false,
  apiURL: 'http://192.168.2.152:8080/api'
};
