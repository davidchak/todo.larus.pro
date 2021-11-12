const path = require('path');
const pino = require('pino');
const { v4: uuidv4  } = require("uuid");
const Bree = require('bree');
const Graceful = require('@ladjs/graceful');
const express = require('express');


class ScheduleWorker {
  constructor(env){
    this.app = express(),
    this.name = uuidv4(),
    this.env = env,
    this.logger = pino()
  };

  setMiddlewares(){
    this.app.use(express.json())
  }

  setRoutes(){
    this.app.get('/admin', async (req, res) => res.send('<h3>Admn page</h3>'));

    this.app.get('/worker', async (req, res) =>
      res.json({
        worker: {
          name: req.app.bree.config.name,
          jobs: req.app.bree.config.jobs
        }
      })
    );

    this.app.get('/worker/stop', async (req, res) => {
      this.app.bree.stop();
      res.json({'msg': 'worker stop success'});
    });

    this.app.get('/worker/start', async (req, res) => {
      this.app.bree.start();
      res.json({'msg': 'worker start success'})
    });
  }

  setWorker(){
    this.app.bree = new Bree({
      name: uuidv4(),
      logger: this.logger,
      root: path.resolve('./src/worker/jobs'),
      jobs: [{
        name: 'test',
        interval: '3s'
      }],
    });

    this.graceful = new Graceful({brees: [this.app.bree]});

    this.graceful.listen();
    this.app.bree.start();
  }

  init(){
    this.setMiddlewares()
    this.setRoutes()
    this.setWorker()
    return this.app
  }
};

module.exports = {
  ScheduleWorker
}
