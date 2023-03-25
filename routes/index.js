const registerRoutes = require('./register')

const initRoutes = (app) => {
    app.use('/api/register', registerRoutes)
}

module.exports = {initRoutes}