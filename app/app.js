const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
require('../db/connect')

const userRoutes =  require('../routes/user.api.routes')
const productRoutes =  require('../routes/product.api.routes')

app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)

module.exports = app