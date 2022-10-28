import { getTodos } from '../mongo/getTodos.js'
import express from 'express'

const app = express()

app.get('/get/brokyzList/todos', async (req, res) => {
  const todos = await getTodos()
  res.send(todos)
})

// app.listen(3000, () => {
//   console.log('http://127.0.0.1:3000/get/brokyzList/todos')
// })
