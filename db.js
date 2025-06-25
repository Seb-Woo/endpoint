//const { Pool } = require("pg");
import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
  connectionString:
    "postgresql://root:8Y8dnGUFpydNdY7YSRfbC09OzuK6Sl80@dpg-d0vknlndiees73d0ml70-a.oregon-postgres.render.com/db_1_lk8n",
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
