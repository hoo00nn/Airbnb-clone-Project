const { getRooms } = require('../model/rooms');

const getOptionRooms = async (req, res) => {
  const data = await getRooms(req.query);

  console.log(data);
  
  return res.json({result : data});
}

module.exports = {
  getOptionRooms
};