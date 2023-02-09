export type TaskModel = () => ({
  add: () => void;
  delete: () => void;
  done: () => void;
  updateTitle: () => void;
  updateDescription: () => void;
})
