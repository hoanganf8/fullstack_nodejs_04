require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const expressEjsLayouts = require("express-ejs-layouts");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const passportLocal = require("./passports/passport.local");
const passportGoogle = require("./passports/passport.google");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var apiRouter = require("./routes/api");
const { User } = require("./models/index");
const authMiddleware = require("./middlewares/auth.middleware");
const cors = require("cors");
var app = express();
// app.use((req, res, next) => {
//   res.set("Access-Control-Allow-Origin", "http://127.0.0.1:53097");
//   res.set("Access-Control-Allow-Headers", "Authorization");
//   next();
// });
app.use(
  session({
    secret: "f8",
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use("local", passportLocal);
passport.use("google", passportGoogle);

passport.serializeUser(function (user, done) {
  done(null, user.id); //Lưu user.id vào session
});

passport.deserializeUser(async function (id, done) {
  const user = await User.findByPk(id); //Truy vấn tới database để trả về thông tin user
  done(null, user);
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressEjsLayouts);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var whitelist = ["http://127.0.0.1:53097", "https://fullstack.edu.vn"];
var corsOptions = {
  origin: function (origin, callback) {
    const mode = process.env.NODE_ENV || "development";
    if (mode === "development") {
      return callback(null, true);
    }
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use("/api", cors(corsOptions), apiRouter);
app.use("/auth", authRouter);
// app.use(authMiddleware);
app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
