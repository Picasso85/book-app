import express from "express";
import getBooks from '../services/books/getBooks.js'

const app = express()

app.get('/', (reg, res) => {   
     res.send('Hello in our app \nn book-aap')
})

app.get('/books', (req, res) => {
    try {
      const books = getBooks()
      res.status(200).json(books)
    } catch (error) {
      console.error(error)
      res.status(500).send('Something went wrong while getting list of books!')
    }
  })
  

app.listen(3000, () =>{
    console.log('server is on localhost :3000..... bep... \nn beep \nn beeeeeppp... \nn http://localhost:3000')
})