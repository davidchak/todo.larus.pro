import { BaseController } from "../../common/controller/base.controller.js";

export class TaskController extends BaseController{
  constructor(taskService) {
    super();
    this.taskService = taskService;
    /**
    * @openapi
    * /task:
    *   get:
    *     tags:
    *       - "Task"
    *     summary: Получение задачи по id
    *     parameters:
    *       - in: "path"
    *         name: "id"
    *         type: "integer"
    *         required: true
    *         description: Идентификатор зачачи из базы
    *         "schema":
    *           "type": "integer"
    *     responses:
    *       200:
    *         description: Возвращает объект задачи.
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
    *                     title:
    *                       type: string
    *                       description: Заголовок задачи.
    *                       example: 'Задача номер один'
    *                     description:
    *                       type: string
    *                       description: Описание задачи.
    *                       example: 'Подробное описание задачи'
    */
    this.router.get("/:id", this.getTask.bind(this));
  }

  async getTask({params}, res, next){
    const result = await this.taskService.findById(params.id);
    if(!result){
      return this.err(res, null, null);
    }
    this.ok(res, result);
  };
}
