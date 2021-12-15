import { User } from "./user.entity.js";

export class UserRepository {
  constructor(connection, logger){
    this.logger = logger;
    this.ormRepository = connection.getRepository(User);
  }

  async getAll(){
    return await this.ormRepository.find();
  }

  async getById(id){
    return await this.ormRepository.find({
      id
    });
  }

  async create(args){
    let user = new User(...args);
    return await this.ormRepository.save(user);
  }
}


