import express from 'express'
import booksRouter from './routes/books.js'
import recordsRouter from './routes/records.js'
import log from './middleware/logMiddleware.js'

const app = express()
app.use(express.json())

app.use(log)

app.use('/books', booksRouter)
app.use('/records', recordsRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(' \n beep.... \n .... \n Server is listening on port 3000 \n .... \n beep.... \n .... \n http://localhost:3000/books')
})