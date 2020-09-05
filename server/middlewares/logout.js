const Session = require('../model/session');
const session = new Session();

const clearAll = (req, res, next) => {
  session.removeSession(req.cookies.SID);
  res.clearCookie('SID');

  next();
}

module.exports = {
  clearAll
}