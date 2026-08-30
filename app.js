const express = require('express');
const app = express()
const cookieparser = require('cookie-parser')
const path = require('path')
const db = require('./config/mongoose-connection')
const ownerRouter = require('./routes/ownerRouter')
const userRouter = require('./routes/userRouter')
const productsRouter = require('./routes/productsRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieparser())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.get('/user', userRouter);
app.get('/product', productsRouter)
app.get('/owner', ownerRouter)

app.listen(3000, () => {
    console.log('your app is running on prot 3000')
})