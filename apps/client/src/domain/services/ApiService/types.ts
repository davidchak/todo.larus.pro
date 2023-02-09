import { AxiosInstance } from "axios"


export type ApiServiceReturnType = {
  getInstance: () => AxiosInstance
}

export type ApiServiceType = () => ApiServiceReturnType;
