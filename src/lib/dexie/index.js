import Dexie from 'dexie'
import { setting, sites } from './initData'

const db = new Dexie('zy')

db.version(3).stores({
  search: '++id, keywords',
  setting: 'id, theme, site, pass',
  star: '++id, site, ids, name, type, year, index',
  sites: '++id, index, key, name, json, xml, down, level',
  history: '++id, site, ids, name, type, year, index, time'
})

db.on('populate', () => {
  db.setting.bulkAdd(setting)
  db.sites.bulkAdd(sites)
})

db.open()

export default db
