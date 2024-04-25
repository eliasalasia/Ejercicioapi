import { pool } from './db.js'

export const getUsuarios = async (req, res) => {
  const [usuarios] = await pool.query('SELECT * FROM usuarios')
  res.json(usuarios)
}
