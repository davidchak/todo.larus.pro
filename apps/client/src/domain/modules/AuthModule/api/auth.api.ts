import { IAuthLoginDTO } from "./dto/authLogin.dto";

export class AuthApi {
  configService: any;

  constructor(configService: any){
    this.configService = configService;
  }

  async login(payload: IAuthLoginDTO){

  }
}
