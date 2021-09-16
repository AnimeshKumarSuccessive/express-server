import { config } from 'dotenv';
config();
   
import IConfig from './Iconfig';

const configuration: IConfig = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
};

export default Object.freeze(configuration);