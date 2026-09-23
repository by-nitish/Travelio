const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),

        description: Joi.string().required(),

        location: Joi.string().required(),

        country: Joi.string().required(),

        price: Joi.number()
            .min(0)
            .required(),

        image: Joi.string()
            .allow("", null),

        category: Joi.string()
            .valid(
                "Trending",
                "Rooms",
                "Iconic Cities",
                "Mountains",
                "Castles",
                "Pools",
                "Camping",
                "Farms",
                "Arctic"
            )
            .required()

    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().trim().required(),        
    }).required(),
});


module.exports.bookingSchema = Joi.object({
    booking: Joi.object({
        checkIn: Joi.date()
            .required(),

        checkOut: Joi.date()
            .required(),

        guests: Joi.number()
            .min(1)
            .required(),
    }).required(),
});


