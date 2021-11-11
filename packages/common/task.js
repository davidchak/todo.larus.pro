const Joi = require('joi')
const _ = require('lodash')
const { BaseEntity } = require('.')

class TaskDTO {
	#scheme = Joi.object({
		title: Joi.string().min(3).max(255),
		description: Joi.string().min(0).max(2048),
		created_at: Joi.date(),
		completed: Joi.boolean().default(false),
	})

  toJSON(item){
    return this.#scheme.validate({
      title: item.title,
      description: item.description,
      created_at: item.created_at,
      completed: item.completed,
    })
  }
}

class TaskEntity extends BaseEntity {
  constructor(dto){
    super()
    Object.assign(this, dto)
  }
}

module.exports = {
  TaskEntity,
}
