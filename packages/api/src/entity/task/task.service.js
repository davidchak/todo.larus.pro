import { Task } from './task.entity.js';

export class TaskService {
  constructor(taskRepository, userRepository){
    this.repository = taskRepository;
    this.userRepository = userRepository;
  }

  async findById(id){
    return await this.repository.findById(id);
  }

  async create(args){
    let task = new Task(args.title, args.description);
    let user = this.userRepository.findById(args.id);

    if (user){
      task.user = user;
    }

    this.repository.create(task);
  }
}
