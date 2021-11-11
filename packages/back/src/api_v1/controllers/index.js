const Joi = require('joi')


class BaseController {
  #data;
  #error;
  #status= 200;

  constructor(req, res) {
    this.req = req,
    this.res = res
  };

  set data(val){
    this.#data = val
  };

  set error(val){
    this.#error = val
  };

  set status(val){
    this.#status = val
  };

  get responce(){
    return this.res.json({
      data: this.#data,
      error: this.#error,
      status: this.#status
    })
  }
}

module.exports = {
  BaseController,
}
