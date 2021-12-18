import { Project } from './project.entity.js';

export class ProjectService {
  constructor(projectRepository){
    this.projectRepository = projectRepository;
  }

  async findById(id){
    return await this.projectRepository.findById(id);
  }

  async create(args){
    let newProject = new Project(args);
    return await this.projectRepository.create(newProject);
  }
}
