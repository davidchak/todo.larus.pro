import { BaseController } from "../../common/base.controller.js";

export class CourseController extends BaseController{
  constructor(courseServiceInstance) {
    super();
    this.courseService = courseServiceInstance;
    this.router.get("/:id", this.getCourse.bind(this));
    this.router.post("/create", this.createCourse.bind(this));
    this.router.post("/update", this.updateCourse.bind(this));
    this.router.post("/delete", this.deleteCourse.bind(this));
  }

  async getCourse({params}, res, next){
    const result = await this.courseService.findById(params.id);
    if(!result){
      return this.err(res, null, null);
    }
    this.ok(res, result);
  };

  async createCourse({body}, res, next){
    const {error, result} = await this.courseService.create(body);
    if(error ||!result){
      return this.err(res, 422, 'Не удалось обработать запрос')
    }
    this.created(res, result);
  };

  async deleteCourse({body}, res, next){
    const {error, result} = await this.courseService.delete(body);
    if(error){
      return this.err(res, 422, 'Не удалось обработать запрос')
    }
    this.ok(res, result);
  };

  async updateCourse({body}, res, next){
    const {error, result} = await this.courseService.update(body);
    if(error){
      return this.err(res, 422, 'Не удалось обработать запрос')
    }
    this.ok(res, result);
  };
}
