const Joi = require('joi');
const _ = require('lodash');

class TaskDTO{
	constructor(){
		this.scheme = Joi.object({
			title: Joi.string().min(3).max(255),
			description: Joi.string().min(0).max(2048),
			created_at: Joi.date(),
			completed: Joi.boolean().default(false)
		})
	};

	static toDTO(dataArray){
		return _.forEach(dataArray, item => {
			return this.scheme.validate({
				title: item.title,
				description: item.description,
				completed: item.completed
			})
		});		
	}
}

module.exports = {
	TaskDTO
} 