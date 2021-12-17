import { EntitySchema } from "typeorm";
import bcrypt from "bcryptjs";

export class User {
  constructor(name, email, passwordHash=null){
    this.name = name;
    this.email = email;
    if(passwordHash){
      this.password = this.password;
    }
  }

  async setPassword(pass, salt){
    this._password = await bcrypt.hash(pass, salt);
  }

  async comparePassword(pass){
    return await bcrypt.compare(pass, this._password);
  }
};

export const UserSchema = new EntitySchema({
  name: "User",
  tableName: "users",
  target: User,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },

    name: {
      type: "varchar"
    },

    email: {
      type: "varchar"
    },

    password: {
      type: "varchar"
    }
  },
  // relations: {
  //   categories: {
  //     target: "Category",
  //     type: "many-to-many",
  //     joinTable: true,
  //     cascade: true
  //   }
  // }
})
