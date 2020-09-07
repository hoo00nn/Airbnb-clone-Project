const { rooms } = require('../model/rooms');

const getOptionRooms = async (req, res) => {
  const data = await rooms.selectAll();
  const roomByOption = 
    data.filter(v => req.query.location.includes(v.place) && v.maxPerson >= req.query.personnel);

  return res.render('rooms', {
    data : roomByOption,
    location : req.query.location,
    personnel : req.query.personnel,
    checkin : req.query.checkin,
    checkout : req.query.checkout,
    length : roomByOption.length
  });
}

module.exports = {
  getOptionRooms
};