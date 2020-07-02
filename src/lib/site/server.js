import express from 'express'
import cors from 'cors'
const { get } = require('axios').default

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.post('/api', async (req, res) => {
  const result = await get(req.body.url)
  res.json({
    code: 1,
    info: result.data
  })
})

app.listen(4848, () => {
  console.log('4848 running')
})
