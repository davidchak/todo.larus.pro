import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware'
import { ITaskEntity } from "../entity/types";
import { ITaskState } from "./types";


export const TaskStore = () => {

  const taskStore = create<ITaskState>()(
    (set, get) => ({
      tasks: [],
      addTask: (task: ITaskEntity) => set((state) => ({ tasks:  [...get().tasks, task] })),
    })
  )

  const withMiddleware = (store: typeof taskStore) => devtools(
    persist(store, {
      name: "task_state"
    })
  );

  return withMiddleware(taskStore);
}
