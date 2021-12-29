type IMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface IApiItem {
  url: string;
  method: IMethod;
}

export interface IApiOptions {
  [key: string]: IApiItem;
}
