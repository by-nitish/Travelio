const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("connect to DB");
}) .catch((err)=>{
    console.log(err);
})
async function main() {
    await mongoose.connect(MONGO_URL);
    
}

const initDB = async () => {
  await Listing.deleteMany({});
  //'6a2ff734c958cca59c19a391'
  initData.data =initData.data.map((obj) => ({...obj, owner:"6a2ff734c958cca59c19a391"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();