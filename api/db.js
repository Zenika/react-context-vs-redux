const path = require('path')
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

const accessDB = open({
  filename: path.join(__dirname, 'data.db'),
  driver: sqlite3.cached.Database
});

// Init DB
(async () => {
  const db = await accessDB
  db.exec(`CREATE TABLE IF NOT EXISTS ToDo (
    id INTEGER PRIMARY KEY ASC,
    list TEXT,
    done BOOLEAN DEFAULT FALSE,
    description TEXT
  )`)
})()

module.exports = {
  async create(data) {
    const db = await accessDB
    const { lastID } = await db.run(
      `INSERT INTO ToDo (list, done, description) VALUES(?, ?, ?)`,
      data.list,
      false,
      data.description
    )
    return lastID
  },

  async get(id) {
    const db = await accessDB
    return db.get(
      `SELECT * FROM ToDo WHERE id = ?`,
      id
    )
  },

  async getAll(list) {
    const db = await accessDB
    const condition = list ? `WHERE list = ?` : ``
    return db.all(
      `SELECT * FROM ToDo ${condition} ORDER BY id DESC`,
      list
    )
  },

  async update(id, data) {
    const db = await accessDB

    if ('done' in data) {
      await db.run(`UPDATE ToDo SET done = ? WHERE id = ?`, data.done, id)
    }

    if ('description' in data) {
      await db.run(`UPDATE ToDo SET description = ? WHERE id = ?`, data.description, id)
    }

    if ('list' in data) {
      await db.run(`UPDATE ToDo SET list = ? WHERE id = ?`, data.list, id)
    }

    return id
  },

  async delete(id) {
    const db = await accessDB
    const { changes } = await db.run(
      `DELETE FROM ToDo WHERE id = ?`,
      id
    )
    return changes
  },

  async deleteAll(list) {
    const db = await accessDB
    const condition = list ?  `WHERE list = ?` : ``
    const { changes } = await db.run(
      `DELETE FROM ToDo ${condition}`,
      list
    )
    return changes
  },
}
