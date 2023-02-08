// import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
// import { createCustomStorage } from "~/shared/helpers/customWebStorage";


// export class AuthStore {
//   _configs: any = {};
//   _store: any;

//   constructor(configs: any){
//     this._configs = configs;
//     this._store = create(
//       persist(
//         (set, get) => ({
//           token: null,
//           setToken: (newToken: string) => set((state) => ({ token: newToken })),
//           clearStore: () => set(() => ({ token: null })),
//         }),
//         {
//           name: this._configs.STORE_NAME,
//           storage: createJSONStorage(() =>
//             createCustomStorage({
//               storeName: this._configs.STORE_NAME,
//               dbName: this._configs.DB_NAME,
//               driverName: this._configs.DB_DRIVER,
//             })
//           ),
//         }
//       )
//     )
//   }


//   get store(){
//     return this._store;
//   }
// };
export {}
