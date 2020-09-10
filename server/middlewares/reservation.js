const { reservationDB, sessionDB } = require('../database/db_connection');

const reservation = async (req, res) => {
  if (Object.prototype.hasOwnProperty.call(req.cookies, 'SID')) {
    const email = await findEmail(req.cookies.SID);
    req.body.email = email;
    insertReservation(req.body);
    
    const data = await findReservation(email);

    res.render('reservation', {data : data});
  }
  else res.send('<script type="text/javascript">alert("로그인이 필요합니다. 로그인 하신 후 다시 시도해 주세요.");</script>"');
}

const renderReservationPage = async (req, res) => {
  const email = await findEmail(req.cookies.SID);
  const data = await findReservation(email);

  res.render('reservation', {data : data});
}

const findEmail = (SID) => {
  return new Promise(resolve => {
    sessionDB.findOne({SID : SID}, (err, data) => {
      if (err) console.log('Not Found Email!!');
      resolve(data.email);
    })
  })
}

const findReservation = (email) => {
  return new Promise(resolve => {
    reservationDB.find({email : email}, (err, data) => {
      if (err) console.log('Not Found Reservation!!');
      resolve(data);
    })
  })
}

const insertReservation = (data) => {
  const roomInfo = {
    checkin : JSON.parse(data.data).checkin,
    checkout : JSON.parse(data.data).checkout,
    image : JSON.parse(data.data).image,
    title : JSON.parse(data.data).title,
    email : data.email,
    location : JSON.parse(data.data).location
  };

  reservationDB.insert(roomInfo);
}

module.exports = {
  reservation,
  renderReservationPage
}