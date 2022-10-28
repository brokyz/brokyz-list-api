import express from 'express'
import { removeTodo } from '../mongo/removeTodo.js'

const app = express()
app.post('/post/brokyzList/removeTodo', async (req, res) => {
  if (!req.query.id) {
    res.send('err:缺少必备的 id 字段')
    return
  }
  const { id } = req.query
  const result = await removeTodo(id)
  res.send(result)
})

// app.listen(3000, () => {
//   console.log('http://127.0.0.1:3000/get/brokyzList/todos')
// })
