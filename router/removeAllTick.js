import express from 'express'
import { removeAllTick } from '../mongo/removeAllTick.js'

const app = express()
app.post('/post/brokyzList/removeAllTick', async (req, res) => {
  const result = await removeAllTick()
  res.send(result)
})

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000/post/brokyzList/removeAllTick')
})
