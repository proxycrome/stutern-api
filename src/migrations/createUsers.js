import client from "../database/index.js";


client.query("CREATE TABLE users (id SERIAL PRIMARY KEY, name varchar(100), email varchar(100))");