import pino from "pino";

export class LoggerService{
  constructor(){
    this.logger = pino();
  }

  info(msg){
    this.logger.info(msg)
  }

  error(msg){
    this.logger.error(msg)
  }

  log(msg){
    this.logger.log(msg)
  }
}
