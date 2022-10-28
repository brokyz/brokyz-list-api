import express from 'express'
import { changeValue } from '../mongo/changeValue.js'

const app = express()
app.post('/post/brokyzList/changeValue', async (req, res) => {
  if (!req.query.id || !req.query.value) {
    res.send('err:缺少必备的 id 和 value 字段')
    return
  }
  const { id, value } = req.query
  changeValue(id, value)
  res.send(`sucess changed ${JSON.stringify(req.query)}`)
})

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000/post/brokyzList/changeValue')
})
