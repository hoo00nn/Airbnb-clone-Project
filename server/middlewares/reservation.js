const { reservationDB, sessionDB } = require('../database/db_connection');

const reservation = async (req, res) => {
  if (Object.prototype.hasOwnProperty.call(req.cookies, 'SID')) {
    const email = await findEmail(req.cookies.SID);
  }
  res.send('<script type="text/javascript">alert("로그인이 필요합니다. 로그인 하신 후 다시 시도해 주세요.");</script>"');
}

const findEmail = (SID) => {
  return new Promise(resolve => {
    sessionDB.findOne({SID : SID}, (err, data) => {
      if (err) console.log('Not Found Email!!');
      resolve(data.email);
    })
  })
}

module.exports = {
  reservation
}