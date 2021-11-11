const route = require('express').Router();
const { TaskController } = require("./controllers/task");

function analiticsMiddleware(req, res, next){
    console.log(req.session);
    next();
}

route.get('/', analiticsMiddleware, (req, res) => {
  res.json(req.session)
})

route.get('/task', async (req, res) => {
  return await TaskController.exec(req, res)
})

module.exports = route;
