const route = require('express').Router();

function analitics(req, res, next){
    console.log(req.session);
    next();
}


route.get('/', analitics, (req, res) => {
    res.json(req.session)
})

module.exports = route;