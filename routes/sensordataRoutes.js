const express= require('express');

const router=express.Router();


const sensorDataController=require('../controllers/sensordataController');


router.post("/iota/sensordata",sensorDataController.sensordataHandler);

router.get("/iota/sensordata",sensorDataController.getdataHandler);

module.exports=router;