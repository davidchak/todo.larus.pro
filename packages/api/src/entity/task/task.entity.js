import { EntitySchema } from "typeorm";

export class Task {
  constructor(title, description){
    this.title = title;
    this.description = description;
  }
};

export const TaskSchema = new EntitySchema({
  name: "Task",
  tableName: "tasks",
  target: Task,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },

    title: {
      type: "varchar"
    },

    description: {
      type: "varchar",
      default: null,
    },
  },
  relations: {
    autor: {
      target: "User",
      type: "one-to-many",
      joinTable: true,
      cascade: true
    }
  }
})
