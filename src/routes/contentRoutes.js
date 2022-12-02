import { Router } from "express";
import { createPost, createComment } from "../controllers/contentControllers.js";

const contentRouter = Router();
contentRouter.post("/posts", createPost);
contentRouter.patch("/comment/:idPost", createComment);
// contentRouter.get();

export default contentRouter;