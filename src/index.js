import express from "express";
import authRouter from "./routes/authRoutes";
import contentRouter from "./routes/contentRoutes";

const app = express();
app.use(express.json());
app.use(authRouter);
app.use(contentRouter);

app.listen(process.env.PORT, () => console.log('Express server listening on port ' + process.env.PORT));