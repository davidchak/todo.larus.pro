import { BaseController } from "../../common/base.controller.js";

export class UserController extends BaseController{
  constructor(userServiceInstance) {
    super();
    this.userService = userServiceInstance;
    this.router.get("/:id", this.getUser.bind(this));
    this.router.post("/login", this.login.bind(this));
  }

  async getUser({params}, res, next){
    const result = await this.userService.findUserById(params.id);
    if(!result){
      return this.err(res, null, null);
    }
    this.ok(res, result);
  };

  async login({body}, res, next){
    const result = await this.userService.findUserByEmail(body.email);
    if(!result || result.password != body.password){
      return this.err(res, 401, 'Не авторизован')
    }

    this.ok(res, result);
  };
}
