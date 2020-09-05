const { getRooms } = require('../model/rooms');

const getOptionRooms = async (req, res) => {
  const data = await getRooms(req.query);
  
  return res.render('rooms', {data : data});
}

module.exports = {
  getOptionRooms
};