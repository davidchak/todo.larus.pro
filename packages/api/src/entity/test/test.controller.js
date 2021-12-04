import { BaseController } from "../../common/base.controller.js";

export class TestController extends BaseController{
  constructor(testServiceInstance) {
    super();
    this.testService = testServiceInstance;
    this.router.get("/:id", this.getTest.bind(this));
    this.router.post("/create", this.createTest.bind(this));
    this.router.post("/update", this.updateTest.bind(this));
    this.router.post("/delete", this.deleteTest.bind(this));
  }

  async getTest({params}, res, next){
    const result = await this.testService.findById(params.id);
    if(!result){
      return this.err(res, null, null);
    }
    this.ok(res, result);
  };

  async createTest({body}, res, next){
    const {error, result} = await this.testService.create(body);
    if(error ||!result){
      return this.err(res, 422, 'Не удалось обработать запрос')
    }
    this.created(res, result);
  };

  async updateTest({body}, res, next){
    const {error, result} = await this.testService.update(body);
    if(error){
      return this.err(res, 422, 'Не удалось обработать запрос')
    }
    this.ok(res, result);
  };

  async deleteTest({body}, res, next){
    const {error, result} = await this.testService.delete(body);
    if(error){
      return this.err(res, 422, 'Не удалось обработать запрос')
    }
    this.ok(res, result);
  };

}
