const { BaseController } = require(".")

class TaskController extends BaseController{

  static async exec(req, res) {
    let instance = new TaskController(req, res);

    try {
      instance.data = getData
    } catch (err) {
      instance.error = err.message
      instance.status = err.status
    }

    return instance.responce;
  }
}

module.exports = {
  TaskController,
}
