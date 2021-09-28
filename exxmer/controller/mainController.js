const mainController = {}
const dataJson = require('../data.json')
mainController.homePage = (req, res) => {
    res.render('home', {
        data: dataJson
    })
}

mainController.homePost = (req, res) => {
    // console.log('Hello worlds')
    res.send("Hello WOrld")
}


module.exports = mainController
