import {User} from './user.entity.js';

export class UserService {
  constructor(userRepository){
    this.repository = userRepository;
  }

  async findById(id){
    let user = await this.repository.getById(id);
    return user;
  }

  async findByEmail(email){
    return new User('test', 'test@mail.ru', '1234');
  }

  async create(args){
    let user = new User(...args);
    this.repository.create(user);
  }
}
