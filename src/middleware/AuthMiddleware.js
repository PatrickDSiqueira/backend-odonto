const {promisify} = require('util');
const jwt = require('jsonwebtoken')
const {secret} = require("../jwt/Auth");

module.exports = async (req, res, next) => {

    const auth = req.headers.authorization;

    if (!auth) {

        return res.status(401).json("Não autenticado")
    }

    try {

        const [, token] = auth.split(' ');

        const decode = await promisify(jwt.verify)(token, secret);

        if (!decode) {

            return res.status(401).json({
                error: true,
                code: 130,
                message: "Sua autenticação está expirada"
            });
        }

        req.user_id = decode.id;
        next();

    } catch (error) {

        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                error: true,
                code: 130,
                message: "Sua autenticação está expirada"
            });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                error: true,
                code: 130,
                message: "Token inválido"
            });
        } else {
            console.error(error.message);
            return res.status(500).json({
                error: true,
                code: 500,
                message: "Internal server error"
            });
        }
    }
}