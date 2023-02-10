export interface ITaskEntity {
  id: string,
  title: string,
  description: string,
  createdAt: Date,
  updatedAt: Date,
  completedAt: Date|null,
  done: boolean
}
