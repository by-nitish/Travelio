# Travelio

Wanderlust is a full-stack web application inspired by Airbnb, where users can create, view, edit, and delete travel listings. Users can also sign up, log in, add reviews, and manage only the listings and reviews created by them.

## Features

- User authentication using Passport.js
- User signup, login, and logout
- Create, read, update, and delete travel listings
- Add and delete reviews for listings
- Authorization for listing owner and review author
- Booking functionality for listings
- Wishlist page for saved listings
- Map integration for listing locations
- Flash messages for success and error feedback
- Server-side validation using Joi
- MongoDB database integration using Mongoose
- EJS templating with reusable layouts and partials
- RESTful routing structure
- Error handling middleware
- Cloudinary configuration for image support

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- EJS-Mate
- Passport.js
- Passport Local Mongoose
- Express Session
- Connect Flash
- Joi
- Bootstrap
- CSS
- JavaScript

## Project Structure

```txt
MAJORPROJECT/
├── controllers/
│   ├── booking.js
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── init/
│   ├── data.js
│   ├── geocodeOldListings.js
│   └── index.js
│
├── models/
│   ├── booking.js
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   │   ├── rating.css
│   │   └── style.css
│   │
│   └── js/
│       ├── indexMap.js
│       ├── map.js
│       └── script.js
│
├── routes/
│   ├── bookings.js
│   ├── listings.js
│   ├── reviews.js
│   └── user.js
│
├── utils/
│   └── ExpressError.js
│
├── views/
│   ├── bookings/
│   │   ├── index.ejs
│   │   └── new.ejs
│   │
│   ├── includes/
│   │   ├── flash.ejs
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   ├── listings/
│   │   ├── edit.ejs
│   │   ├── error.ejs
│   │   ├── index.ejs
│   │   ├── map.ejs
│   │   ├── new.ejs
│   │   └── show.ejs
│   │
│   └── users/
│       ├── login.ejs
│       ├── signup.ejs
│       └── wishlist.ejs
│
├── .env
├── .gitignore
├── app.js
├── cloudConfig.js
├── middleware.js
├── package-lock.json
├── package.json
├── README.md
└── schema.js
```


## Main Functionalities

### Listings
- Users can view all travel listings.
- Logged-in users can create new listings.
- Listing owners can edit or delete only their own listings.
- Each listing contains title, description, image, price, location, and country.

### Reviews
- Logged-in users can add reviews to listings.
- Reviews include rating and comment.
- Review authors can delete only their own reviews.
- Listings and reviews are connected using MongoDB references.

### Bookings
- Users can create bookings for listings.
- Booking-related routes, controllers, models, and views are separated for cleaner project structure.
- Booking data is stored in MongoDB using a dedicated booking model.

### Wishlist
- Users can access a wishlist page.
- Wishlist functionality is handled through user-specific views and routes.

### Authentication and Authorization
- Users can sign up, log in, and log out.
- Passport.js is used for user authentication.
- Protected routes allow access only to logged-in users.
- Authorization middleware ensures that only listing owners can update/delete listings and only review authors can delete reviews.

## How to Run Locally

Clone the repository:

```bash
git clone https://github.com/bhaskar1213/Wanderlust.git
```

Go inside the project folder:

```bash
cd Wanderlust
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add required environment variables:

```env
ATLASDB_URL=your_mongodb_atlas_url
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

Start the server:

```bash
node app.js
```

Open in browser:

```txt
http://localhost:8080/listings
```

## Key Concepts Used

- RESTful routing
- MVC-style project structure
- Authentication and authorization
- Server-side validation using Joi
- Middleware-based request handling
- MongoDB data modeling with Mongoose
- Relationship between listings, reviews, and users
- Flash messages and session handling
- EJS layouts and reusable partials
- Centralized error handling using a custom Express error class

## Key Learnings

- Built a full-stack web application using Node.js, Express.js, MongoDB, and EJS
- Implemented user authentication with Passport.js
- Created protected routes and authorization middleware
- Managed relationships between users, listings, and reviews
- Used EJS and Bootstrap for dynamic server-rendered UI
- Handled validation, errors, sessions, and flash messages in Express

## Author

Nitish Kumar
