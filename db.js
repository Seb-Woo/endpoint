//const { Pool } = require("pg");
import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
  connectionString:
    "postgresql://dispositivo_user:nBWzOydjgPdocYyk8sUy3Q5Lxe9laaUD@dpg-d2affp3ipnbc739b676g-a.oregon-postgres.render.com/dispositivo",
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
