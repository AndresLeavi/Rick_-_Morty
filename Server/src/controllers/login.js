const users = require ('../utils/users')

const logIn = (req, res) => {
    const { email, password } = req.query;

    const userFound = users.find((user) => user.email === email && user.password === password)

    // return userFound 
    // ? res.status(200).json({ access: true })
    // : res.status(404).json({ access: false })

    if (userFound) return res.status(200).json({ access: true }) // el return tiene que estar sino NO se me corta la ejecucion de la fn()
    return res.status(404).json({ access: false }) 
};

module.exports = {
    logIn
}