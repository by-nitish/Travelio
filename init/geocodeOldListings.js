const mongoose = require("mongoose");
const Listing = require("../models/listing");
const axios = require("axios");

require("dotenv").config();

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(async () => {
    console.log("Connected to DB");
    await geocodeListings();
    mongoose.connection.close();
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function geocodeListings() {
    const listings = await Listing.find({});


    for (let listing of listings) {

    const address = `${listing.location}, ${listing.country}`;

    const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
            params: {
                q: address,
                format: "json",
                limit: 1,
            },
            headers: {
                "User-Agent": "wanderlust-app",
            },
        }
    );

     if (response.data.length > 0) {

        const place = response.data[0];

        const lat = parseFloat(place.lat);
        const lng = parseFloat(place.lon);

        listing.geometry = {
            lat,
            lng,
        };

        await listing.save();

        console.log(`${listing.title} updated`);
    } else {
        console.log(`No location found for ${listing.title}`);
    }

     await delay(2000);
}
}

