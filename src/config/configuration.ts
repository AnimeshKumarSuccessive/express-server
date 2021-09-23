import { config } from 'dotenv';
import { env } from 'process';
config();
   
import IConfig from './Iconfig';

const configuration: IConfig = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  secret: process.env.jwtSECRET,
  
};

export default Object.freeze(configuration);