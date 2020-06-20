// import axios from 'axios'
import { getSite } from './sites'
import axios from 'axios'
const zy = {
  list (key, t, pg = 1, wd, h) {

  },
  class_list (key) { // 获取资源分类
    return new Promise((resolve, reject) => {
      const site = getSite(key)
      axios.post('http://localhost:4848/proxy', {
        url: site.api
      }).then(res => {
        const d = res.data.info
        const arr = []
        if (d.data) {
          for (const i of d.list) {
            const j = {
              id: i.list_id,
              name: i.list_name
            }
            arr.push(j)
          }
        } else {
          for (const i of d.class) {
            const j = {
              id: i.type_id,
              name: i.type_name
            }
            arr.push(j)
          }
        }
        resolve(arr)
      }).catch(err => {
        reject(err)
      })
    })
  },
  detail (key, id) {
    return new Promise((resolve, reject) => {
      const site = getSite(key)
      axios.post('http://localhost:4848/proxy', { url: site.api + '?ids=' + id }).then(res => {
        // console.log(res)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default zy
