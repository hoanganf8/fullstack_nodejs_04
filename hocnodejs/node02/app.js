import express from "express";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
const app = express();
const port = 8080;
const hostname = 'localhost';

//Routing
app.use(indexRouter);
app.use('/users', usersRouter);

app.listen(port, hostname, () => {
    console.log(`Server running: http://${hostname}:${port}`);
});