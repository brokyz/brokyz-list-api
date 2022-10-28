import express from 'express'
import { addTodo } from '../mongo/addTodo.js'

const app = express()
app.post('/post/brokyzList/addTodo', (req, res) => {
  if (!req.query.value || !req.query.id) {
    res.send('err:缺少必备的 value 或 id 字段')
    return
  }
  const { id, value } = req.query
  addTodo(id, value)
  res.send(`sucess get ${JSON.stringify(req.query)}`)
})

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000/post/brokyzList/addTodo')
})
