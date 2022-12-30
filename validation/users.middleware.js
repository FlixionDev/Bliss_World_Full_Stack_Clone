const jwt = require('jsonwebtoken');

const AuthMiddleWare = (req,res,next) =>{
    if(req.headers['auth']===undefined){
        return res.status(400).send({
            message:"access denied"
        })
    }
    const token = req.headers['auth'];
    try {
        const decodeToken = jwt.verify(token,process.env.JWT_PRIVATE_KEY);
        req.userId = decodeToken.userId;
        return next();
    } catch (error) {
        return res.status(500).send({
            message:"server error"
        })
    }
}
module.exports = AuthMiddleWare;