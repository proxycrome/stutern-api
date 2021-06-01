import client from '../database/index.js';

export const getUsers = async (req, res) => {
  try {
    const response = await client.query('SELECT table_schema,table_name FROM information_schema.tables;')

    if (response) {
      return res.status(200).json({ status: 'success', data: response.rows });
    }
  } catch (err) {
    console.log(err);
  }
};

