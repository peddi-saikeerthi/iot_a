
const SensorData = require("../models/sensordata");


const sensordataHandler = async (req, res, next) => {
  
  const {voltage,current,temparature,humidity } = req.body;


  
  

  let exists = false;
  let sensordata;
  try {
    sensordata = await SensorData.find();
    if (sensordata.length == 1) {
      exists = true;
    }

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Updating Data Failed",
    });
  }

  if (exists) {
    const result = await SensorData.findOneAndUpdate(
      { _id: sensordata[0]._id },
      {
        voltage: voltage,
        current: current,
        temparature: temparature,
        humidity: humidity
        
      }
    );
  } else {
    try {
      const newSensorData = new SensorData({
        voltage: voltage,
        current: current,
        temparature: temparature,
        humidity: humidity



      });
      await newSensorData.save();
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Updating Data Failed",
      });
    }
  }

  return res.status(200).json({
    message: "Data updated successfully",
  });
};



const getdataHandler = async (req, res, next) => {
  let sensordata, updatedAtnew;
  try {
    sensordata = await SensorData.find();
    console.log(sensordata);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Getting Data Failed",
    });
  }
 

  const data = {
    voltage: sensordata[0].voltage,
    current: sensordata[0].current,
    temparature: sensordata[0].temparature,
    humidity: sensordata[0].humidity,

   

    
  }
  
  return res.status(200).json(data);
}

exports.sensordataHandler = sensordataHandler;
exports.getdataHandler = getdataHandler;
