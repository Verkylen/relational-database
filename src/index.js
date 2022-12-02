import express from "express";
import authRouter from "./routes/authRoutes.js";
import contentRouter from "./routes/contentRoutes.js";

const app = express();
app.use(express.json());
app.use(authRouter);
app.use(contentRouter);

app.listen(process.env.PORT, () => console.log('Express server listening on port ' + process.env.PORT));