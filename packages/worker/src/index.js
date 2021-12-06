const { v4: uuidv4  } = require("uuid");
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const { db } = require("./infra/db");
const SequelizeStore = require("connect-session-sequelize")(
  session.Store
);
const { ScheduleWorker } = require("./worker");
require('dotenv').config()


module.exports.createApp = (env) => {
  const app = express()

  app.use(cookieParser())

  app.use(express.json())

  app.use(cors({
    origin: '*'
  }))

  app.use(
    session({
      store: new SequelizeStore({
        db,
        checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
        expiration: 24 * 60 * 60 * 1000  // The maximum age (in milliseconds) of a valid session.
      }),

      secret: 'wow very secret',

      genid: function(req) {
        return uuidv4() // use UUIDs for session IDs
      },

      cookie: {
        maxAge: 600000,
        secure: false, // if https enabled
      },

      saveUninitialized: false,
      resave: false,
      unset: 'destroy',
      proxy: true
    })
  )

  app.use(
    history({
      verbose: true,
      logger: console.log.bind(console),
      disableDotRule: true,
      rewrites: [
        {
          from: /\/(api|css|js|img|font)\//,
          to: function(context) {
            return context.parsedUrl.pathname
          },
        },
      ],
    })
  )

  app.use('/', require('./view'))

  app.use('/api/v1', require('./api_v1'))

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404))
  })

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
  })

  db.sync({force: false});

  console.log(process.env.TEST_ENV);

  return app
}

module.exports.createWorker = (env) => {
  let workerInstance = new ScheduleWorker(env);
  return workerInstance.init();
};