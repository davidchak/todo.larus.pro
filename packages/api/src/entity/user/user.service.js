import {User} from './user.entity.js';

export class UserService {
  constructor(userRepository){
    this.repository = userRepository;
  }

  async findById(id){
    return await this.repository.findById(id);
  }

  async findByEmail(email){
    return await this.repository.findByEmail(email);
  }

  async create(args){
    let user = new User(...args);
    this.repository.create(user);
  }

  async validate({email: password}){

    const existedUser = await this.repository.findByEmail(email);
    if(!existedUser){
      return false;
    }

    const newUser = new User(existedUser.email, existedUser.name, existedUser.password);
    return newUser.comparePassword(password);
  }
}
