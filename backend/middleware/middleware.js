const jwt = require("jsonwebtoken");

function verfiyToken(req, res, next) {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
        return res.status(401).json({ message: "unauthorized user" });
    }
    try {
        const decoded = jwt.verify(token, "mysecret");
        req.user = decoded; // attach user payload to req
        next(); // proceed to the next middleware/route
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token.' });
    }
}

module.exports={verfiyToken}