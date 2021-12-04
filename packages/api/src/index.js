import { App } from "./app/api.app.js";
import { Server } from "./server/server.js";
import { DbConfig } from "./config/db.config.js";
import { DbService } from "./database/db.service.js";
import { LoggerService } from "./logger/logger.service.js";
import { UserRepository } from "./entity/user/user.repository.js";
import { UserService } from "./entity/user/user.service.js";
import { UserController } from "./entity/user/user.controller.js";
import { ProjectRepository } from "./entity/project/project.repository.js";
import { ProjectService } from "./entity/project/project.service.js";
import { ProjectController } from "./entity/project/project.controller.js";
import { CourseRepository } from "./entity/course/course.repository.js";
import { CourseService } from "./entity/course/course.service.js";
import { CourseController } from "./entity/course/course.controller.js";
import { ArticleRepository } from "./entity/article/article.repository.js";
import { ArticleService } from "./entity/article/article.service.js";
import { ArticleController } from "./entity/article/article.controller.js";
import { TaskRepository } from "./entity/task/task.repository.js";
import { TaskService } from "./entity/task/task.service.js";
import { TaskController } from "./entity/task/task.controller.js";
import { TestRepository } from "./entity/test/test.repository.js";
import { TestService } from "./entity/test/test.service.js";
import { TestController } from "./entity/test/test.controller.js";


// Init outer service
const loggerService = new LoggerService();
const dbService = new DbService(DbConfig.connection, loggerService);


// Init entity repository
const userRepositoryInstance = new UserRepository(dbService, loggerService);
const projectRepositoryInstance = new ProjectRepository(dbService, loggerService);
const courseRepositoryInstance = new CourseRepository(dbService, loggerService);
const articleRepositoryInstance = new ArticleRepository(dbService, loggerService);
const taskRepositoryInstance = new TaskRepository(dbService, loggerService);
const testRepositoryInstance = new TestRepository(dbService, loggerService);


// Init entity services
const userService = new UserService(userRepositoryInstance);
const projectService = new ProjectService(projectRepositoryInstance, articleRepositoryInstance, courseRepositoryInstance, testRepositoryInstance);
const courseService = new CourseService(courseRepositoryInstance, projectRepositoryInstance, taskRepositoryInstance);
const articleService = new ArticleService(articleRepositoryInstance, projectRepositoryInstance, taskRepositoryInstance);
const taskService = new TaskService(taskRepositoryInstance, courseRepositoryInstance, testRepositoryInstance, articleRepositoryInstance);
const testService = new TestService(testRepositoryInstance, projectRepositoryInstance, taskRepositoryInstance);


// Init entiry controllers
const userController = new UserController(userService);
const projectController = new ProjectController(projectService);
const courseController = new CourseController(courseService);
const articleController = new ArticleController(articleService);
const taskController = new TaskController(taskService);
const testController = new TestController(testService);



const api = new App(
  dbService,
  userController,
  projectController,
  courseController,
  articleController,
  taskController,
  testController,
);


await api.init();


const apiServer = new Server(api.app, process.env.PORT || 3000);
apiServer.start();
console.log(process.env.DB_HOST)
