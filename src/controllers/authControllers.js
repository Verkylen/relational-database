import bcrypt from "bcrypt";
import { sessionsCollection, usersCollection } from "../db.js";
import { v4 as uuidV4 } from "uuid";

export async function signUp(req, res) {
    const user = req.body;
  
    try {
        const userExists = await usersCollection.findOne({ email: user.email });
        if (userExists) {
            return res.status(409).send({ message: "Esse usuário já existe" });
        }
  
        const hashPassword = bcrypt.hashSync(user.password, 10);
  
        await usersCollection.insertOne({ ...user, password: hashPassword });
        res.sendStatus(201);
    } catch {
        res.sendStatus(500);
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body;
  
    const token = uuidV4();
  
    try {
        const userExists = await usersCollection.findOne({ email });
    
        if (!userExists) {
            return res.sendStatus(401);
        }
    
        const passwordOk = bcrypt.compareSync(password, userExists.password);
    
        if (!passwordOk) {
            return res.sendStatus(401);
        }
    
        await sessionsCollection.insertOne({
            token,
            userId: userExists._id,
        });
    
        res.send({ token });
    } catch {
        res.sendStatus(500);
    }
}