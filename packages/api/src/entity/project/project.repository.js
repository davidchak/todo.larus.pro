import { Project } from "./project.entity.js";

export class ProjectRepository {
  constructor(connection, logger){
    this.logger = logger;
    this.ormRepository = connection.getRepository(Project);
  }

  async findById(id){
    return await this.ormRepository.findOne({
      id
    });
  }

  async create(project){
    return await this.ormRepository.save(project);
  }
}


