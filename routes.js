const express = require('express')
const routes = express.Router()

routes.get('/', function (req, res) {
    return res.redirect("/professors")
})

routes.get('/professors', function (req, res) {
    return res.render("professors/index")
})

routes.get('/students', function (req, res) {
    return res.send("students")
})

module.exports = routes