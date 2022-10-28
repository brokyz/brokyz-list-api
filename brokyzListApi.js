import express from 'express'
import cors from 'cors'
import { getTodos } from './mongo/getTodos.js'
import { addTodo } from './mongo/addTodo.js'
import { removeTodo } from './mongo/removeTodo.js'
import { changeTick } from './mongo/changeTick.js'
import { changeValue } from './mongo/changeValue.js'
import { removeAllTick } from './mongo/removeAllTick.js'
import { tickAll } from './mongo/tickAll.js'

const app = express().use(cors())
// 获取todos
app.get('/get/brokyzList/todos', async (req, res) => {
  const todos = await getTodos()
  res.send(todos)
})

// 添加todos
app.post('/post/brokyzList/addTodo', (req, res) => {
  if (!req.query.value || !req.query.id) {
    res.send('err:缺少必备的 value 或 id 字段')
    return
  }
  const { id, value } = req.query
  addTodo(id, value)
  res.send(`sucess get ${JSON.stringify(req.query)}`)
})

// 删除todos
app.post('/post/brokyzList/removeTodo', async (req, res) => {
  if (!req.query.id) {
    res.send('err:缺少必备的 id 字段')
    return
  }
  const { id } = req.query
  const result = await removeTodo(id)
  res.send(result)
})

// 改变Tick状态
app.post('/post/brokyzList/changeTick', async (req, res) => {
  if (!req.query.id || !req.query.done) {
    res.send('err:缺少必备的 id 和 done 字段')
    return
  }
  const { id, done } = req.query
  changeTick(id, done)
  res.send(`sucess changed ${JSON.stringify(req.query)}`)
})

// 更改value
app.post('/post/brokyzList/changeValue', async (req, res) => {
  if (!req.query.id || !req.query.value) {
    res.send('err:缺少必备的 id 和 value 字段')
    return
  }
  const { id, value } = req.query
  changeValue(id, value)
  res.send(`sucess changed ${JSON.stringify(req.query)}`)
})

// 删除所有打勾项目
app.post('/post/brokyzList/removeAllTick', async (req, res) => {
  const result = await removeAllTick()
  res.send(result)
})

// 全部打勾或全部不打勾
app.post('/post/brokyzList/tickAll', async (req, res) => {
  if (!req.query.done) {
    res.send('err:缺少必备的  done 字段')
    return
  }
  const { done } = req.query
  tickAll(done)
  res.send(`sucess changed ${JSON.stringify(req.query)}`)
})

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})
