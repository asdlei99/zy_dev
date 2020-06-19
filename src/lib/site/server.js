const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.post('/proxy', async (req, res) => {
  const result = await axios.post(req.body.url)
  res.json({
    code: 1,
    info: result.data
  })
})

app.listen(3838, () => {
  console.log('3838 running')
})
