import express from "express";
import path from "path";
import JobController from "./src/Controller/Job.controller.js";
import expressEjsLayouts from "express-ejs-layouts";

const server=express();

const jobController=new JobController();
server.use(expressEjsLayouts);
server.use(express.static("src/Views"));
server.use(express.static("public"));

server.set('view engine','ejs');
server.set('views',path.join(path.resolve(),"src","View"));

server.get("/",jobController.getHomePage);
server.get("/jobs",jobController.getJobs);
server.get("/register",jobController.getRegisterForm);
server.get("/login",jobController.getLoginForm);

server.listen(4100,()=>console.log("listening"));