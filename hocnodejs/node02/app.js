import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "connect-flash";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
const app = express();
const port = 8080;
const hostname = "localhost";

//Cấu hình template engine
app.set("views", "./views");
app.set("view engine", "ejs");

//Cấu hình layout
app.use(expressEjsLayouts);

//Cấu hình đọc cookie
app.use(cookieParser());

//Cấu hình session
app.use(
  session({
    name: "f8_session",
    secret: "21aba181cc4d",
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(flash());

//Cấu hình đọc body từ request
// --> Đọc body ở dạng application/x-www-urlencoded
app.use(
  express.urlencoded({
    extended: false,
  }),
);
// --> Đọc body ở dạng application/json
app.use(express.json());

// app.use(authMiddleware);

//Routing
app.use(indexRouter);
app.use(authRouter);
app.use("/users", usersRouter);

app.listen(port, hostname, () => {
  console.log(`Server running: http://${hostname}:${port}`);
});
