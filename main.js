"use strict"

const express = require("express"),
app = express(),
errorController= require("./controllers/errorController"),
homeController= require("./controllers/homeController"),
subscriberController= require("./controllers/subscriberController"),
layouts = require("express-ejs-layouts"),
mongoose = require("mongoose"),
Subscriber = require("./models/subscriber");

mongoose.connect("mongodb+srv://cklump25:it231@cluster0.y0mck.mongodb.net/chiCityCarnival-Database?retryWrites=true&w=majority");

const db = mongoose.connection;

db.once("open", () =>{
    console.log("Connected to MongoDB");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());
app.use(homeController.logRequestPaths);

app.get("/", homeController.index);
app.get("/about", homeController.showUs);
app.get("/rides", homeController.showRides);
app.get("/shops",homeController.showShops);
app.get("/food", homeController.showFood);
app.get("/acts", homeController.showActs);
app.get("/contact", subscriberController.getSubscriptionPage);
app.get("/thanks", homeController.postedSignUpForm);
app.get("/subscribers", subscriberController.getAllSubscribers, (req, res, next) => {
    res.render("subscribers", {subscribers: req.data});
});
app.post("/subscribe", subscriberController.saveSubscriber);


app.use(errorController.noPageFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});





