const path = require('path');
const pino = require('pino');
const { v4: uuidv4  } = require("uuid");
const Bree = require('bree');
const Graceful = require('@ladjs/graceful');


class ScheduleWorker {
  constructor(env){
    this.name = uuidv4(),
    this.env = env,
    this.bree = new Bree({
      logger: pino(),
      root: path.resolve('./src/worker/jobs'),
      jobs: [{
        name: 'test',
        interval: '3s'
      }],
    });
    this.graceful = new Graceful({brees: [this.bree]});
  };

  start(){
    this.graceful.listen();
    this.bree.start();
  };

  stop(){
    this.bree.stop();
  };
};

module.exports = {
  ScheduleWorker
}
