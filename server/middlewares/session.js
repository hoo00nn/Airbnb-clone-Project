const Session = require('../model/session');
const session = new Session();

const checkSession = async (req, res, next) => {
  if (Object.prototype.hasOwnProperty.call(req.cookies, 'SID')) {
    const isSession = await session.sessionCheck(req.cookies.SID);

    if (isSession) req.login = true;
    else req.login = false;
  }
  else req.login = false;

  next();
}

module.exports = {checkSession};