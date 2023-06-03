import mongoose from "mongoose";
const env = process.env.DB_URI;

mongoose.connect(env);
const db = mongoose.connection;

export default db;
