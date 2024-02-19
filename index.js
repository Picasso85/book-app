import express from 'express'
import booksRouter from './routes/books.js'

const app = express()
app.use(express.json())

app.use('/books', booksRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(' \n beep.... \n .... \n Server is listening on port 3000 \n .... \n beep.... \n .... \n http://localhost:3000/books')
})