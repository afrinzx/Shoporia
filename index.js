const bodyParser = require("body-parser");
const express= require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app=express();
const dotenv=require("dotenv").config();
const PORT=process.env.PORT || 4000;
const cookieParser=require("cookie-parser");
const morgan=require("morgan");
dbConnect();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//routes

//must be used after authRouter
app.use(notFound);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
});