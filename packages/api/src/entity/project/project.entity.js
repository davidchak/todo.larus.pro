import { EntitySchema } from "typeorm";

export class Project {
  constructor(title, description){
    this.title = title;
    this.description = description;
  }
};

export const ProjectSchema = new EntitySchema({
  name: "Project",
  tableName: "projects",
  target: Project,
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
