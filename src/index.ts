import Config from "./config/configuration";
import Server from "./server";

const server = new Server (Config);

server.bootstrap();
server.run();