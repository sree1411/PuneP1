const mongoose = require("mongoose");
const BikeSchema = new mongoose.Schema ({

    vehical_name: {
          type: String,
          required:true
        },

    vehical_owner: {
          type: String,
          required:true
        },
    vehical_cc: {
          type: Number,
          required:true
        } ,
    
     vehical_Ph: {
          type: String,
          required:true
        } ,   
    
    vehical_address: {
            type: String,
            required:true
          } 



});

module.exports =  mongoose.model("bike", BikeSchema);