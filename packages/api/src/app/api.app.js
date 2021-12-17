import express from "express";
import cors from "cors";
import pino from "pino-http";
import { DbConfig } from "../service/config/db.config.js";
import { DbService } from "../service/database/db.service.js";
import { OpenApiService } from "../service/openapi/openapi.service.js";
import { AdminLkService } from "../service/admin/admin.service.js";
import { LoggerService } from "../service/logger/logger.service.js";
import { BasicAuthMiddleware } from "../middleware/auth/basicAuth.middleware.js";
import { UserRepository } from "../entity/user/user.repository.js";
import { UserService } from "../entity/user/user.service.js";
import { UserController } from "../entity/user/user.controller.js";
import { UserSchema } from "../entity/user/user.entity.js";

// Init outer service
const loggerService = new LoggerService();
const dbService = new DbService(DbConfig.connection, [UserSchema], loggerService);
await dbService.init();
await dbService.sync();

// Init middleware
const basicAuthMiddleware = new BasicAuthMiddleware();

// Init outer services
const openApiService = new OpenApiService();
const adminLkService = new AdminLkService();

// Init entity repository
const userRepository = new UserRepository(dbService.connection, loggerService);

// Init entity services
const userService = new UserService(userRepository);

// Init entiry controllers
const userController = new UserController(userService);

export class App {
  constructor() {
    this.app = express();
    this.app.db = dbService;
  }

  useSettings() {
    this.app.set('trust proxy', true);
    this.app.set('x-powered-by', false);
  }

  useMiddleware() {
    this.app.use(express.json())
    this.app.use(pino());
    this.app.use(cors());
    this.app.use(basicAuthMiddleware.execute.bind(this));
  }

  useRoutes() {
    this.app.use("/admin", adminLkService.router);
    this.app.use("/api/ui", openApiService.router);
    this.app.use("/api/user", userController.router);
  }

  async init() {
    this.useSettings();
    this.useMiddleware();
    this.useRoutes();
  }
}
