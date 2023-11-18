import express from "express";
const app = express();

import cors from "cors";

import cookieParser from "cookie-parser";

// import path from "path";
// const path = require("path");

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config({ path: "backend/config/config.env" });
// }

// Using Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// Importing Routes
import post from "./routes/post.js";
import user from "./routes/user.js";

// Using Routes
app.use("/api/v1", post);
app.use("/api/v1", user);



// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });


export default app;