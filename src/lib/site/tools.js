// import axios from 'axios'
import { getSite } from './sites'
import axios from 'axios'
const zy = {
  ports: 4848,
  // list (key, pg = 1, t) {
  list (key, t) { // TODO list
    return new Promise((resolve, reject) => {
      const site = getSite(key)
      let url = null
      if (t) {
        url = `${site.api}?ac=detail&t=${t}`
      } else {
        // url = `${site.api}?ac=detail&pg=${pg}`
      }
      axios.post('http://localhost:4848/proxy', { url: url }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  class_list (key) { // 获取资源分类
    return new Promise((resolve, reject) => {
      const site = getSite(key)
      axios.post('http://localhost:4848/proxy', { url: site.api }).then(res => {
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
  search (key, wd, pg = 1) { // 搜索资源
    return new Promise((resolve, reject) => {
      const site = getSite(key)
      const keywords = encodeURI(wd)
      axios.post('http://localhost:4848/proxy', { url: site.api + '?ac=detail&wd=' + keywords + '&pg=' + pg }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  detail (key, id) { // TODO 详情
    return new Promise((resolve, reject) => {
      const site = getSite(key)
      axios.post('http://localhost:4848/proxy', { url: site.api + '?ac=detail&vod_id=' + id }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default zy
