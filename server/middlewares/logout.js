const Session = require('../model/session');
const session = new Session();

const clearAll = (req, res) => {
  session.removeSession(req.cookies.SID);
  res.clearCookie('SID');

  return res.redirect('/');
}

module.exports = {
  clearAll
}