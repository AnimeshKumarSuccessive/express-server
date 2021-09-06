import {config} from 'dotenv';
import * as joi from '@hapi/joi';

const envVarsSchema=joi.Objects({
  NODE_ENV:joi.string().default('dev'),
  PORT: joi.number().default(9000),
}).unknown().required();

const {value: envVars}=envVarsSchema.validate(process.env);
config();
const Configure: Iconfig= Object.freeze({
  env: envVars.NODE_ENV,
  port: envVars.PORT,
});

export default Configure