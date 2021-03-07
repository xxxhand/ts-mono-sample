import { logger } from './custom-tools/custom-logger';
import { defaultConfig } from './shared/default-config';


export { ErrorCodes } from './custom-codes/error-codes';
export { HttpCodes } from './custom-codes/http-codes';
export { CustomError } from './custom-models/custom-error';
export { CustomResult } from './custom-models/custom-result';
export { customArgvs } from './custom-tools/custom-argvs';
export { getId as getTraceId, defaultNameSpace } from './custom-tools/custom-request-tracer';
export { CustomUtils } from './custom-tools/custom-utils';
export { validateStrategy, CustomValidator } from './custom-tools/custom-validator';
export { TNullable, ICodeObject, IConfig, IMongooseClient, IBaseRequest } from './custom-types';
export { DefaultContainer } from './shared/default-container';
export { CustomMongooseClient } from './custom-tools/custom-mongoose-client';
export { CustomClassBuilder } from './custom-tools/custom-class-builder';
export { CustomJsonProp } from './custom-tools/custom-decorators/custom-json-prop';
export { commonInjectorCodes } from './shared/default-mapping-codes';
export const LOGGER = logger;
export const defConf = defaultConfig;