import { Router } from "express";
import { createPost, createComment, readPosts } from "../controllers/contentControllers.js";

const contentRouter = Router();
contentRouter.post("/posts", createPost);
contentRouter.patch("/comment/:idPost", createComment);
contentRouter.get("/posts", readPosts);

export default contentRouter;