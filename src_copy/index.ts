import config from './config/configuration';
import Server from './Server';

const server = new Server(config);

server.boostrap();
server.run();