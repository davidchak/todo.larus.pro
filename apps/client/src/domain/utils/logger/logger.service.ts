import chalk from "chalk";
import { ILoggerService, ILoggerMessage } from "./types";


export class LoggerService implements ILoggerService {
  // TODO: заменить тип
  private configService: any;

  constructor(configService: any){
    this.configService = configService;
  }

  info(msg: ILoggerMessage){
    const styled = chalk.blue;
    console.log(styled(['INFO']) + ` [${msg.module}] `  + new Date().toUTCString() + ` ${msg.text}.`)
  }

  warn(msg: ILoggerMessage){
    const styled = chalk.yellow;
    console.log(styled(['WARN']) + ` [${msg.module}] `  + new Date().toUTCString() + ` ${msg.text}.`)
  }

  error(msg: ILoggerMessage){
    const styled = chalk.red;
    console.log(styled(['INFO']) + ` [${msg.module}] `  + new Date().toUTCString() + ` ${msg.text}.`)
  }
}
