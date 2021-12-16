import { App } from "./app/api.app.js";
import { Server } from "./server/server.js";
import { DbConfig } from "./service/config/db.config.js";
import { DbService } from "./service/database/db.service.js";
import { OpenApiService } from "./service/openapi/openapi.service.js";
import { AdminLkService } from "./service/admin/admin.service.js";
import { LoggerService } from "./service/logger/logger.service.js";
import { UserRepository } from "./entity/user/user.repository.js";
import { UserService } from "./entity/user/user.service.js";
import { UserController } from "./entity/user/user.controller.js";
import { UserSchema } from "./entity/user/user.entity.js";

// Main loop
(async function bootstrap(){

  // Init outer service
  const loggerService = new LoggerService();
  const dbService = new DbService(DbConfig.connection, [UserSchema], loggerService);
  await dbService.init();
  await dbService.sync();

  // Init outer services
  const openApiService = new OpenApiService();
  const adminLkService = new AdminLkService();

  // Init entity repository
  const userRepository = new UserRepository(dbService.connection, loggerService);

  // Init entity services
  const userService = new UserService(userRepository);

  // Init entiry controllers
  const userController = new UserController(userService);

  const api = new App(
    dbService,
    openApiService,
    adminLkService,
    userController,
  );

  await api.init();

  const apiServer = new Server(api.app, process.env.PORT || 3000);
  apiServer.start();
})()

