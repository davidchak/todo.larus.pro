import express from "express";
import cors from "cors";
import pino from "pino-http";


export class App {
  constructor(
    dbInstanse,
    userControllerInstance,
    projectControllerInstance,
    courseControllerInstance,
    articleControllerInstance,
    taskControllerInstance,
    testControllerInstance,
  ) {
    this.app = express();
    this.app.db = dbInstanse;
    this.userController = userControllerInstance;
    this.projectController = projectControllerInstance;
    this.courseController = courseControllerInstance;
    this.articleController = articleControllerInstance;
    this.taskController = taskControllerInstance;
    this.testController = testControllerInstance;
  }

  useMiddleware() {
    this.app.use(express.json())
    this.app.use(pino());
    this.app.use(cors());
  }

  useRoutes() {
    this.app.use("/api/user", this.userController.router);
    this.app.use("/api/project", this.projectController.router);
    this.app.use("/api/course", this.courseController.router);
    this.app.use("/api/article", this.articleController.router);
    this.app.use("/api/task", this.taskController.router);
    this.app.use("/api/test", this.testController.router);
  }

  async init() {
    this.useMiddleware();
    this.useRoutes();
    await this.app.db.auth();
  }
}
