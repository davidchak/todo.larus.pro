// import PubSub from "pubsub-js";
// import { topics } from "../../../../shared/constants";
// import { ITaskModel } from "../types";


// export const TaskEvents = () => {

//   const createTask = async function (payload: ITaskModel) {
//     PubSub.publish(topics.TASK_ADD, payload);
//   };

//   /**
//    * Подписка на событие создания задачи
//    * @param { Function } cb - коллбэк на событие
//    */
//   const onTaskCreated = function (cb) {
//     const token = PubSub.subscribe(topics.TASK_ADD, (topic, user) => {
//       cb(topic, user);
//     });

//     const unsubscribe = function () {
//       PubSub.unsubscribe(token);
//     };

//     return unsubscribe;
//   };

//   return {
//     addTask,
//     onLogin,
//   };
// };

export {}
