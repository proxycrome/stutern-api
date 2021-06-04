import client from '../database/index.js';

export const getUsers = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM users ORDER BY id ASC');

    if (response) {
      return res.status(200).json({ status: 'success', data: response.rows });
    }
  } catch (err) {
    console.log(err);
  }
};

export const addUsers = async (req, res) => {
  const { name, email } = req.body;
  try {
    const response = await client.query(`INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *`, [name, email]);

    if (response) {
      return res.status(200).json({ status: 'success', data: response.rows });
    }
  } catch (err) {
    console.log(err);
  }
};


export const updateUsers = async (req, res) => {
  const { name, email } = req.body;
  const userId = +req.params.id
  try {
    const response = await client.query(`UPDATE users SET "name"=$1, "email"=$2 WHERE "id" = $3 RETURNING *`, [name, email, userId]);

    if (response) {
      return res.status(200).json({ status: 'success', data: response.rows });
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteUsers = async (req, res) => {
  const userId = +req.params.id
  try {
    const response = await client.query(`DELETE FROM users WHERE "id" = $1 RETURNING *`, [userId]);

    if (response) {
      return res.status(200).json({ status: 'success', data: response.rows });
    }
  } catch (err) {
    console.log(err);
  }
};