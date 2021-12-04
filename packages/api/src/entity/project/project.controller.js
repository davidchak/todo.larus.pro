import { BaseController } from "../../common/base.controller.js";

export class ProjectController extends BaseController{
  constructor(projectServiceInstance) {
    super();
    this.projectService = projectServiceInstance;
    this.router.get("/:id", this.getProject.bind(this));
    this.router.post("/create", this.createProject.bind(this));
    this.router.post("/delete", this.deleteProject.bind(this));
    this.router.post("/update", this.updateProject.bind(this));
  }

  async getProject({params}, res, next){
    const result = await this.projectService.findById(params.id);
    if(!result){
      return this.err(res, null, null);
    }
    this.ok(res, result);
  };

  async createProject({body}, res, next){
    const {error, result} = await this.projectService.create(body);
    if(error ||!result){
      return this.err(res, 422, 'Не удалось обработать запрос')
    }
    this.created(res, result);
  };

  async deleteProject({body}, res, next){
    const {error, result} = await this.projectService.delete(body);
    if(error){
      return this.err(res, 422, 'Не удалось обработать запрос')
    }
    this.ok(res, result);
  };

  async updateProject({body}, res, next){
    const {error, result} = await this.projectService.update(body);
     if(error){
      return this.err(res, 422, 'Не удалось обработать запрос')
    }
    this.ok(res, result);
  };
}
