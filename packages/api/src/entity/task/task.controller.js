import { BaseController } from "../../common/base.controller.js";

export class TaskController extends BaseController{
  constructor(taskServiseInstance) {
    super();
    this.taskService = taskServiseInstance;
    this.router.get("/:id", this.getTask.bind(this));
    this.router.post("/create", this.createTask.bind(this));
    this.router.post("/update", this.updateTask.bind(this));
    this.router.post("/delete", this.deleteTask.bind(this));
  }

  async getTask({params}, res, next){
    const result = await this.taskService.findById(params.id);
    if(!result){
      return this.err(res, null, null);
    }
    this.ok(res, result);
  };

  async createTask({body}, res, next){
    const {error, result} = await this.taskService.create(body);
    if(error ||!result){
      return this.err(res, 422, 'Не удалось обработать запрос')
    }
    this.created(res, result);
  };

  async updateTask({body}, res, next){
    const {error, result} = await this.taskService.update(body);
    if(error){
      return this.err(res, 422, 'Не удалось обработать запрос')
    }
    this.ok(res, result);
  };

  async deleteTask({body}, res, next){
    const {error, result} = await this.taskService.delete(body);
    if(error){
      return this.err(res, 422, 'Не удалось обработать запрос')
    }
    this.ok(res, result);
  };
}
