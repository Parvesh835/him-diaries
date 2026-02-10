import express from 'express';
import authRouter from "./API/routes/auth.routes.js";
const app = express();

// middleware:
app.use(express.json()),

    // api signup:

    // http://localhost:5000/api/auth/signup  : post

    // Routers:
    app.use("/api/auth", authRouter);

export default app;