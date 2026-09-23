const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const listingSchema = new Schema({
    title: {
        type:String,
        required: true,
    },
    description: String,
    

    image: {
  filename: {
    type: String,
    default: "listingimage",
  },
  url: {
    type:String,
    default:"https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    set: (v)=> v==="" ?
     "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
     : v,
  }
},

    price: Number,
    location: String,
    country: String,

    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      }
    ],   
    
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User", 
    },

    geometry: {
    lat: {
        type: Number,
    },
    lng: {
        type: Number,
    },
    },

    category: {
    type: String,
    enum: ["Trending", "Rooms","Iconic Cities", "Mountains", "Castles", "Pools", "Camping", "Farms", "Arctic"],
    default: "Trending",
},


});

listingSchema.post("findOneAndDelete", async (listing)=>{
    if(listing){
      await Review.deleteMany({ _id: {$in: listing.reviews}});
    }
}) ;





const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;