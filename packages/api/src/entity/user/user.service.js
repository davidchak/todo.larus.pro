export class UserService {
  constructor(userRepositoryInstance){
    this.repository = userRepositoryInstance;
  }

  async findUserById(id){
    return await this.repository.model.findByPk(id);
  }

  async findUserByEmail(email){
    return await this.repository.model.findOne({
      where: {
        contacts: email
      }
    });
  }

  async create(obj){
    // return await this.repository.create(obj);
    return null;
  }
}
