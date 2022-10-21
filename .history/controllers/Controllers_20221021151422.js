exports.Home = (req, res) => {
    res.render('main')
}
exports.About = (req, res) => {
    res.render('about',{nom:"Shako"})
}
exports.Contact = (req, res) => {
    res.render('contact')
}