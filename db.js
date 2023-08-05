const mongoose=require('mongoose');



async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Jobpost');
  
  }
  main().then(()=>{console.log("MongoDb connected successfully......")})
  
  .catch(err => console.log(err));
module.exports=mongoose;