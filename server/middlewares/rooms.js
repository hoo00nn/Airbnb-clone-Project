const { getRooms } = require('../model/rooms');

const getOptionRooms = async (req, res) => {
  const data = await getRooms(req.query);
  
  return res.render('rooms', {
    data : data,
    location : req.query.location,
    personnel : req.query.personnel,
    checkin : req.query.checkin,
    checkout : req.query.checkout,
    length : data.length
  });
}

module.exports = {
  getOptionRooms
};