const Server = require('./classes/class.cluster_master');
const server = new Server();

server.start_worker();
