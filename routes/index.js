const registerRoutes = require('./register')

const initRoutes = (app) => {
    app.use('/register', registerRoutes)
}

module.exports = {initRoutes}