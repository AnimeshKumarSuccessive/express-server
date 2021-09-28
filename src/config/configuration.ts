import { config } from 'dotenv';
import { env } from 'process';

config();
   
import IConfig from './Iconfig';

const configuration: IConfig = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  secret: process.env.jwtSECRET,
  mongoURL: process.env.MONGO_URL, 
  pass: process.env.PASSWORD, 
};

export default Object.freeze(configuration);