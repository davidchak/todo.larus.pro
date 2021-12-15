import { BaseController } from "../../common/controller/base.controller.js";

export class UserController extends BaseController{
  constructor(userServiceInstance) {
    super();
    this.userService = userServiceInstance;
    /**
    * @openapi
    * /user:
    *   get:
    *     summary: Получение пользователя по id
    *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
    *     parameters:
    *       - in: path
    *         name: id
    *         required: true
    *         description: Numeric ID of the user to retrieve.
    *         schema:
    *           type: integer
    *     responses:
    *       200:
    *         description: Возвращает объект пользователя.
    *         content:
    *           application/json:
    *             schema:
    *               type: object
    *               properties:
    *                 data:
    *                   type: object
    *                   properties:
    *                     id:
    *                       type: integer
    *                       description: The user ID.
    *                       example: 1
    *                     name:
    *                       type: string
    *                       description: The user's name.
    *                       example: test
    *                     email:
    *                       type: string
    *                       description: The user's email.
    *                       example: test@mail.ru
    */
    this.router.get("/get/:id", this.getUser.bind(this));

    /**
     * @openapi
     * /user:
     *   post:
     *     summary: Создание нового пользователя
     *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
    */
    this.router.post("/login", this.login.bind(this));
  }

  async getUser({params}, res, next){
    const result = await this.userService.findById(params.id);
    if(!result){
      return this.err(res, null, null);
    }
    this.ok(res, result);
  };

  async login({body}, res, next){
    const result = await this.userService.findByEmail(body.email);
    if(!result || result.password != body.password){
      return this.err(res, 401, 'Не авторизован')
    }

    this.ok(res, result);
  };

  async register({body}, res, next){
    const result = await this.userService.findUserByEmail(body.email);
    if(!result || result.password != body.password){
      return this.err(res, 401, 'Не авторизован')
    }

    this.ok(res, result);
  };
}
