import express from 'express'
import { tickAll } from '../mongo/tickAll.js'

const app = express()
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
  console.log('http://127.0.0.1:3000/post/brokyzList/tickAll')
})
