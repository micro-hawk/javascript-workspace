const express = require('express');
const app = express();
const userRouter = require('./routers/user')
const productRouter = require('./routers/product')
const mailRouter = require('./routers/sendmail')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/user',userRouter)
app.use('/product', productRouter)
app.use('/sendmail', mailRouter)


// run the server
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
