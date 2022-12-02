import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
await mongoClient.connect();

const db = mongoClient.db("myBlog");
export const usersCollection = db.collection("users");
export const postsCollection = db.collection("posts");
export const sessionsCollection = db.collection("sessions");