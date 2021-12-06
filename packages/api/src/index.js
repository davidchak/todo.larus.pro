import { App } from "./app/api.app.js";
import { Server } from "./server/server.js";
import { DbConfig } from "./config/db.config.js";
import { DbService } from "./database/db.service.js";
import { LoggerService } from "./logger/logger.service.js";
import { UserRepository } from "./entity/user/user.repository.js";
import { UserService } from "./entity/user/user.service.js";
import { UserController } from "./entity/user/user.controller.js";
import { UserSchema } from "./entity/user/user.entity.js";

// Init outer service
const loggerService = new LoggerService();
const dbService = new DbService(DbConfig.connection, [UserSchema], loggerService);

// Init entity repository
const userRepositoryInstance = new UserRepository(dbService, loggerService);

// Init entity services
const userService = new UserService(userRepositoryInstance);

// Init entiry controllers
const userController = new UserController(userService);

const api = new App(
  dbService,
  userController
);


await api.init();


const apiServer = new Server(api.app, process.env.PORT || 3000);
apiServer.start();
console.log(process.env.DB_HOST)
