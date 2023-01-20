const mongoose = require ("mongoose");
 
const BikeSchema = require("./bike");


mongoose.set('strictQuery',false);

mongoose.connect('mongodb://127.0.0.1/Sportsbikes',{useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("mongodb connection successsfully");
    // create();
    deleted ();
})


const create= () => {
    let data =  {
        vehical_name:"Apache",
        vehical_cc:560,
    vehical_owner: 'tendulkar',
    vehical_Ph: "+91 3456789",
    vehical_address:"D.no 11-125, Ranipeta, Venkatagiti"
     }
  
  new BikeSchema(data).save((err, res)=>{
  
     if(err) {
    console.log("EROOR:", err);
     }
    else {
    console.log("data", res);
  
    }
  }) 
       
  
}

const deleted = () => {
  
    BikeSchema.findByIdAndDelete({_id:'63c7f36d82c931184f1fca17'}).exec((err, res)=>{

        if(err) {
       console.log("EROOR:", err);
        }
       else {
       console.log("data", res);
     
       }
     })

}