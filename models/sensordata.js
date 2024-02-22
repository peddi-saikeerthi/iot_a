const mongoose = require("mongoose");

const Schema = mongoose.Schema;


 
const sensordataSchema = new Schema(
    {
      voltage: {
        type: Schema.Types.Number,
        required: true,
      },
      current: {
        type: Schema.Types.Number,
        required: true,
      },
  
      temparature: {
        type: Schema.Types.Number,
        required: true,
      },
      humidity: {
        type: Schema.Types.Number,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  

module.exports = mongoose.model("sensordata", sensordataSchema);
