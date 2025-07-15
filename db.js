//const { Pool } = require("pg");
import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
  connectionString:
    "postgresql://frontend_q9nf_user:R8EHk63HZ0jFBn53pDzngmh6xuhDzM9X@dpg-d1rapaeuk2gs739oh4lg-a.oregon-postgres.render.com/frontend_q9nf",
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log("Connected to the database successfully");
    client.release();
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

testConnection();
