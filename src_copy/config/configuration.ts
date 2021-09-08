import { config } from 'dotenv';
config();

import * as Joi from '@hapi/joi';

const envVar = Joi.object({    
  PORT: Joi.number().default(9000),
  NODE_ENV: Joi.string().default('dev'),
}).unknown().required();

const { value: envVars } = envVar.validate(process.env);    
import IConfig from './IConfig';

const configuration: IConfig = {
  port: envVars.PORT,
  env: envVars.NODE_ENV,
};

export default Object.freeze(configuration);