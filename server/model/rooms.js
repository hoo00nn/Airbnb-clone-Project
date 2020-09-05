const { roomsDB } = require('../database/db_connection');

const getRooms = (roomInfo) => {
  return new Promise(resolve => {
    roomsDB.find({place : roomInfo.location, maxPerson : roomInfo.personnel}, (err, data) => {
      if (err) console.log('rooms find fail');
      else resolve(data);
    })
  })
}

module.exports = {
  getRooms
};