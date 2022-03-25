

exports.logRequestPaths = (req,res,next) => {
    console.log(`request made to: ${req.url}`);
    next();
};

exports.index = (req,res) => {
    res.render("index");
};

exports.showSignUp = (req,res) => {
    res.render("contact");
};
exports.showRides =(req,res)=>{
    res.render("rides");
};
exports.showUs =(req,res)=>{
    res.render("about");
};
exports.showFood =(req,res)=>{
    res.render("food");
};
exports.showShops =(req,res)=>{
    res.render("shops");
};
exports.showActs =(req,res)=>{
    res.render("acts");
};
exports.postedSignUpForm = (req,res) => {
    res.render("thanks");
};

