import { EntitySchema } from "typeorm";

export class User {
  constructor(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
  }
};

export const UserSchema = new EntitySchema({
  name: "User",
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
