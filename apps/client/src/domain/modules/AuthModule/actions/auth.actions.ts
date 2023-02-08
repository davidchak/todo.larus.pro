// // import PubSub from "pubsub-js";
// import { IAuthActions } from "./auth.actions.types";
// import { IAuthLoginDTO } from "../api/dto/authLogin.dto"
// import { UUIDToken } from "../type";
// import { v4 as uuidV4 } from "uuid";


// export class AuthActions implements IAuthActions {
//   // TODO: Типизировать
//   loggerActions: any;

//   // TODO: Типизировать
//   constructor(loggerActions: any){
//     this.loggerActions = loggerActions;
//   }

//   async login(payload: IAuthLoginDTO): Promise<UUIDToken|null> {
//     // TODO: получить данные из api
//     // TODO: записать в стор
//     // TODO: успешный вход записать отправить в лог
//     // TODO: ошибку записать отправить в лог
//     return new Promise(
//       (resolve) => {
//         return resolve(uuidV4())
//       });
//   }
// }

// //   config: any;
// //   authStore: any;
// //   authApi: any;

// //   constructor(config: any, authStore: any, authApi: any){
// //     this.config = config;
// //     this.authStore = authStore;
// //     this.authApi = authApi;
// //   }

// //   /**
// //    * Функция входа пользователя
// //    */
// //   login = async function (email: string, password: string) {
// //     const authToken = await this.authApi.loginAsync(email, password);

// //     // останавливаем обработку чтобы не выполнились слушатели
// //     if(!authToken){
// //       return;
// //     }

// //     this.authStore.setState({
// //       token: authToken,
// //     });

// //     PubSub.publish(AUTH_LOGIN_TOPIC, authToken);
// //   };

// //   /**
// //    * Событие входа пользователя
// //    * @param { Function } cb - коллбэк на событие
// //    */
// //   const onLogin = function (cb) {
// //     const token = PubSub.subscribe(AUTH_LOGIN_TOPIC, (topic, user) => {
// //       cb(topic, user);
// //     });

// //     const unsubscribe = function () {
// //       PubSub.unsubscribe(token);
// //     };

// //     return unsubscribe;
// //   };

// //   /**
// //    * Функция выхода пользователя
// //    */
// //   const logout = async function () {
// //     const token = authStore.getState().token;
// //     await authApi.logoutAsync(token);

// //     authStore.setState({
// //       token: null,
// //     });

// //     PubSub.publish(AUTH_LOGOUT_TOPIC, null);
// //   };

// //   /**
// //    * Событие выхода пользователя
// //    * @param {Function} cb - коллбэк на событие
// //    */
// //   const onLogout = function (cb) {
// //     const token = PubSub.subscribe(AUTH_LOGOUT_TOPIC, (topic) => {
// //       cb(topic, null);
// //     });

// //     const unsubscribe = function () {
// //       PubSub.unsubscribe(token);
// //     };

// //     return unsubscribe;
// //   };

// //   const subscribeAll = function (cb) {
// //     const token = PubSub.subscribe(AUTH_ROOT_TOPIC, (topic, user) => {
// //       cb(topic, user);
// //     });

// //     const unsubscribe = function () {
// //       PubSub.unsubscribe(token);
// //     };

// //     return unsubscribe;
// //   };

// //   return {
// //     login,
// //     logout,
// //     onLogin,
// //     onLogout,
// //     subscribeAll,
// //   };
// // };

export {}
