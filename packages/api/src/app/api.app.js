import express from "express";
import cors from "cors";
import pino from "pino-http";


export class App {
  constructor(
    db,
    openApi,
    userController,
  ) {
    this.app = express();
    this.app.db = db;
    this.openApi = openApi;
    this.userController = userController;
  }

  useMiddleware() {
    this.app.use(express.json())
    this.app.use(pino());
    this.app.use(cors());
  }

  useRoutes() {
    this.app.use("/api/ui", this.openApi.router);
    this.app.use("/api/user", this.userController.router);
  }

  async init() {
    this.useMiddleware();
    this.useRoutes();
  }
}
