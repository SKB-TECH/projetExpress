
exports.homeRoutes = (req, res) => {
    //on veut execute la requette GET
    axios.get('http://localhost:3000/api/users')
        .then((response) => {
            console.log(response);
            res.render('index', { users: response.data });
        })
        .catch(error => {
            if (error) {
                res.send(error)
            }
        })

}