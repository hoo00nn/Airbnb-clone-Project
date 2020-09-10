const { reservationDB, sessionDB } = require('../database/db_connection');

const reservation = async (req, res) => {
  if (Object.prototype.hasOwnProperty.call(req.cookies, 'SID')) {
    const email = await findEmail(req.cookies.SID);
    req.body.email = email;
    insertReservation(req.body);

    res.render('reservation', data);
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

const insertReservation = (data) => {
  const roomInfo = {
    checkin : JSON.parse(data.data).checkin,
    checkout : JSON.parse(data.data).checkout,
    image : JSON.parse(data.data).image,
    title : JSON.parse(data.data).title,
    email : data.email
  };

  reservationDB.insert(ro);
}

module.exports = {
  reservation
}