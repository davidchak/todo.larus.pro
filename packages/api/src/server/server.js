import http from 'http';
import pino from 'pino';

export class Server {

  constructor(app, port){
    this.app = app;
    this.port = port;
    this.logger = pino();
  }

  start(){
    http.createServer(this.app)
      .listen(
        this.port,
        () => this.logger.info(`Server started on http://127.0.0.1:${this.port}`)
      )
  }
}
