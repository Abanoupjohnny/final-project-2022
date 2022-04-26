const express = require('express')
const app = express()

require('../db/connect')

const userRoutes =  require('../routes/user.api.routes')
const adminRoutes =  require('../routes/admin.api.routes')
const productRoutes =  require('../routes/product.api.routes')

app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/product', productRoutes)

module.exports = app