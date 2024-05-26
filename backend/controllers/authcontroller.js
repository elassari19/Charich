module.exports.logout_post = (req, res) => {
    res.send(logout);
}


module.exports.forgetpassword_post = (req, res) => {
    res.send(forgetpassword);
}

module.exports.confirmation_post = (req, res) => {
    res.send(confirmation);
}

module.exports.status_get = (req, res) => {
    res.render(status);
}