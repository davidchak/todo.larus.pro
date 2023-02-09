import { LoggerService } from "./LoggerService"
import { ConfigService } from "./ConfigsService";
// import { ApiService } from "./ApiService";


const loggerService = LoggerService();
const configService = ConfigService();
// const apiService = ApiService();

loggerService.warn({
  text: configService.getFromEnv("NOT_SECRET_KEY") || 'ничего',
  module: "INIT"
});

export {
  loggerService,
  configService,
  // apiService
}
