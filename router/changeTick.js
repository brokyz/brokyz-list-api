import express from 'express'
import { changeTick } from '../mongo/changeTick.js'

const app = express()
app.post('/post/brokyzList/changeTick', async (req, res) => {
  if (!req.query.id || !req.query.done) {
    res.send('err:缺少必备的 id 和 done 字段')
    return
  }
  const { id, done } = req.query
  changeTick(id, done)
  res.send(`sucess changed ${JSON.stringify(req.query)}`)
})

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000/post/brokyzList/changeTick')
})
