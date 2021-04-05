import { ParameterizedContext, Next } from 'koa';
import Router from '@koa/router';
import { CustomResult } from '@demo/app-common';
import { IStateResult } from '../app-types';

const _router = new Router()
  .prefix('/api/v1');

_router
  .all('/', async (ctx: ParameterizedContext<IStateResult>, next: Next): Promise<void> => {
    ctx.state.result = new CustomResult<string>().withResult('Hello world');
    await next();
  });

export default _router;
