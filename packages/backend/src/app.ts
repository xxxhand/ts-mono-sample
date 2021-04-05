import Koa from 'koa';
import { TNullable } from '@demo/app-common';
import v1Router from './routes';
import { AppInterceptor } from './app-interceptor';
import * as appTracer from './app-request-tracer';

export class App {

  private _app: TNullable<Koa> = null;

  constructor() {
    this._app = new Koa();
    this._init();
  }

  get app() {
    return this._app?.callback();
  }

  private _init() {
    this._app?.use(appTracer.forKoa());
    this._app?.use(AppInterceptor.beforeHandler);
    this._app?.use(AppInterceptor.errorHandler);
    this._app?.use(v1Router.routes());
    this._app?.use(AppInterceptor.completeHandler);
    this._app?.use(AppInterceptor.notFoundHandler);
  }
}
