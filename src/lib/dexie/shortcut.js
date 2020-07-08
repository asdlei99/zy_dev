import db from './index'
const { shortcut } = db

export default {
  async find (doc) {
    return await shortcut.get(doc)
  },
  async update (doc) {
    return await shortcut.update(doc)
  }
}