import db from './dexie'
const { shortcut } = db

export default {
  async find (doc) {
    return await shortcut.get(doc)
  },
  async update (doc) {
    return await shortcut.update(doc)
  },
  async all () {
    return await shortcut.toArray()
  }
}
