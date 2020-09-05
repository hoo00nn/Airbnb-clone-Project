const express = require('express');
const router = express.Router();

const { roomsDB } = require('../database/db_connection'); 

router.post('/', async (req, res) => {
  const rooms = await getRooms();
  return res.json({result : 'true'});
})

const getRooms = () => {
  return new Promise(resolve => {
    roomsDB.find({}, (err, docs) => {
      if (err) console.log('fail');
      else console.log(docs);
      resolve(true);
     })
  })
}

module.exports = router;