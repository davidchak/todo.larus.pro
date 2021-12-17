import { App } from "./app/api.app.js";
import { Server } from "./server/server.js";


// Main loop
(async function bootstrap(){
  // Create api application
  const api = new App();
  await api.init();

  // Create http server
  const apiServer = new Server(api.app, process.env.PORT || 3000);
  apiServer.start();
})()

