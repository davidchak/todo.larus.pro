import { Task } from "./task.entity.js";

export class TaskRepository {
  constructor(connection, logger){
    this.logger = logger;
    this.ormRepository = connection.getRepository(Task);
  }

  async findById(id){
    return await this.ormRepository.findOne({
      id
    });
  }

  async create(task){
    return await this.ormRepository.save(task);
  }
}


