import { User } from "./user.entity.js";

export class UserRepository {
  constructor(connection, logger){
    this.logger = logger;
    this.ormRepository = connection.getRepository(User);
  }

  async findByEmail(email){
    return await this.ormRepository.findOne({
      email
    });
  }

  async findById(id){
    return await this.ormRepository.findOne({
      id
    });
  }

  async create(args){
    let user = new User(...args);
    return await this.ormRepository.save(user);
  }
}


