const { roomsDB } = require('../database/db_connection');

const rooms = {
  selectAll : () => {
    return new Promise(resolve => {
      roomsDB.find({}, (err, data) => {
        resolve(data);
      })
    })
  }
}

module.exports = {
  rooms
}