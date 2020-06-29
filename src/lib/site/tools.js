import { getSite } from './sites'
import axios from 'axios'
import parser from 'fast-xml-parser'
const zy = {
  ports: 4848, // 端口号
  /**
   * 获取资源列表
   * @param {*} key 资源网 key
   * @param {number} [pg=1] 翻页 page
   * @param {*} t 分类 type
   * @returns
   */
  list (key, pg = 1, t) {
    return new Promise((resolve, reject) => {
      const site = getSite(key)
      let url = null
      if (t) {
        url = `${site.xml}?ac=videolist&t=${t}&pg=${pg}`
      } else {
        url = `${site.xml}?ac=videolist&pg=${pg}`
      }
      axios.post(`http://localhost:${this.ports}/xml`, { url: url }).then(async res => {
        const data = res.data.info
        const options = {
          attributeNamePrefix: '_',
          textNodeName: '_t',
          ignoreAttributes: false,
          parseAttributeValue: true,
          trimValues: true
        }
        const json = parser.parse(data, options)
        const videoList = {
          page: json.rss.list._page,
          pagecount: json.rss.list._pagecount,
          pagesize: json.rss.list._pagesize,
          recordcount: json.rss.list._recordcount,
          list: json.rss.list.video
        }
        resolve(videoList)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**
   * 获取资源分类
   * @param {*} key 资源网 key
   * @returns
   */
  type (key) {
    return new Promise((resolve, reject) => {
      const site = getSite(key)
      axios.post(`http://localhost:${this.ports}/json`, { url: site.json }).then(res => {
        const d = res.data.info
        const arr = []
        if (d.data) {
          for (const i of d.list) {
            const j = {
              tid: i.list_id,
              name: i.list_name
            }
            arr.push(j)
          }
        } else {
          for (const i of d.class) {
            const j = {
              tid: i.type_id,
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
  /**
   * 搜索资源
   * @param {*} key 资源网 key
   * @param {*} wd 搜索关键字
   * @returns
   */
  search (key, wd) {
    return new Promise((resolve, reject) => {
      const site = getSite(key)
      axios.post(`http://localhost:${this.ports}/xml`, { url: site.xml + '?wd=' + wd }).then(res => {
        const data = res.data.info
        const options = {
          ignoreAttributes: false,
          parseAttributeValue: true,
          trimValues: true
        }
        const json = parser.parse(data, options)
        const videoList = json.rss.list.video
        resolve(videoList)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**
   * 获取资源详情
   * @param {*} key 资源网 key
   * @param {*} id 资源唯一标识符 id
   * @returns
   */
  detail (key, id) {
    return new Promise((resolve, reject) => {
      const site = getSite(key)
      axios.post(`http://localhost:${this.ports}/xml`, { url: site.xml + '?ac=videolist&ids=' + id }).then(res => {
        const data = res.data.info
        const options = {
          ignoreAttributes: false,
          parseAttributeValue: true,
          trimValues: true
        }
        const json = parser.parse(data, options)
        const videoList = json.rss.list.video
        resolve(videoList)
      }).catch(err => {
        reject(err)
      })
    })
  },
  /**
   * 下载资源
   * @param {*} key 资源网 key
   * @param {*} id 资源唯一标识符 id
   * @returns
   */
  down (key, id) {
    return new Promise((resolve, reject) => {
      const site = getSite(key)
      const url = site.down
      if (url) {
        axios.post(`http://localhost:${this.ports}/xml`, { url: url + '?ac=videolist&ids=' + id + '&ct=1' }).then(res => {
          const data = res.data.info
          const options = {
            ignoreAttributes: false,
            textNodeName: '_t',
            parseAttributeValue: true,
            trimValues: true
          }
          const json = parser.parse(data, options)
          const videoList = json.rss.list.video
          resolve(videoList)
        }).catch(err => {
          reject(err)
        })
      } else {
        resolve(null)
      }
    })
  },
  check (url) {
    return true
  }
}

export default zy
