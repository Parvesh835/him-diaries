import express from "express";
import authRouter from "./API/routes/auth.routes.js";
import districtRouter from "./API/routes/district.routes.js";
import contactRouter from "./API/routes/contact.routes.js";
import galleryRouter from "./API/routes/gallery.routes.js";
import userRouter from "./API/routes/user.routes.js";
import cors from "cors";
import morgan from "morgan";

const app = express();

// middleware:
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// api signup:

// http://localhost:5000/api/auth/signup  : post

// Routers:
app.use("/api/auth", authRouter);
app.use("/api/districts", districtRouter);
app.use("/api/contact", contactRouter);
app.use("/api/gallery", galleryRouter);
app.use("/api/users", userRouter);

export default app;
