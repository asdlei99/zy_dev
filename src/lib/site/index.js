import axios from 'axios'
import parser from 'fast-xml-parser'

axios.post('http://www.zdziyuan.com/inc/api.php?ac=videolist').then(async res => {
  console.log(res, 'res')
  const xml = res.data
  const result = parser.parse(xml)
  console.log(result)
})
