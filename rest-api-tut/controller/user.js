const userService = require('../service/user')
const user = {}

user.getUser = (req, res) => {
    const uid = req.query.id
    const userData = userService.fetchUserDetailById(uid)
    res.send(userData)
}


module.exports = user