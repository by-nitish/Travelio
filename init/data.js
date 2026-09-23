const sampleListings = [

  {
  title: "Glass Cabin in the Himalayas",
  description:
    "Wake up to panoramic Himalayan views from this peaceful glass cabin surrounded by pine forests and mountain trails.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
  },
  price: 1800,
  location: "Manali",
  country: "India",
  category: "Mountains",
},
{
  title: "Royal Heritage Haveli",
  description:
    "Stay in a beautifully restored heritage haveli with carved balconies, courtyards, and traditional Rajasthani charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
  },
  price: 2600,
  location: "Jaipur",
  country: "India",
  category: "Castles",
},
{
  title: "Infinity Pool Villa in Goa",
  description:
    "A stylish villa with a private infinity pool, tropical garden, and quick access to Goa's beaches and nightlife.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=60",
  },
  price: 4200,
  location: "Goa",
  country: "India",
  category: "Pools",
},
{
  title: "Luxury Apartment near India Gate",
  description:
    "A modern apartment in the heart of Delhi with city views, premium interiors, and easy access to major landmarks.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
  },
  price: 2300,
  location: "New Delhi",
  country: "India",
  category: "Iconic Cities",
},
{
  title: "Tea Garden Farmstay",
  description:
    "Relax inside a peaceful farmstay surrounded by tea gardens, misty hills, and fresh mountain air.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=60",
  },
  price: 1400,
  location: "Munnar",
  country: "India",
  category: "Farms",
},
{
  title: "Desert Camping Retreat",
  description:
    "Enjoy camel rides, folk music, starry skies, and a comfortable tent stay in the golden desert.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
  },
  price: 1700,
  location: "Jaisalmer",
  country: "India",
  category: "Camping",
},
{
  title: "Snow View Cottage",
  description:
    "A cozy cottage with warm wooden interiors, fireplace seating, and beautiful snow-covered mountain views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60",
  },
  price: 2100,
  location: "Gulmarg",
  country: "India",
  category: "Arctic",
},
{
  title: "Minimalist Studio in Bengaluru",
  description:
    "A compact and comfortable studio apartment perfect for remote workers, students, and short city stays.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 1100,
  location: "Bengaluru",
  country: "India",
  category: "Rooms",
},
{
  title: "Trending Sea View Apartment",
  description:
    "A bright sea-facing apartment with modern decor, balcony seating, and easy access to cafes and beach walks.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
  },
  price: 2500,
  location: "Pondicherry",
  country: "India",
  category: "Trending",
},
{
  title: "Cliffside Cottage in Santorini",
  description:
    "A whitewashed cliffside cottage with stunning sunset views, blue-domed surroundings, and peaceful island vibes.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=60",
  },
  price: 5200,
  location: "Santorini",
  country: "Greece",
  category: "Trending",
},

//// 2nd 9...

{
  title: "Nordic Snow Lodge",
  description:
    "Experience the magic of winter in a cozy Nordic lodge surrounded by snowy landscapes and frozen lakes.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=60",
  },
  price: 4800,
  location: "Reykjavik",
  country: "Iceland",
  category: "Arctic",
},
{
  title: "Luxury Castle Estate",
  description:
    "Live like royalty in a magnificent castle estate featuring grand halls, gardens, and historic architecture.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1520637836862-4d197d17c35a?auto=format&fit=crop&w=800&q=60",
  },
  price: 6500,
  location: "Edinburgh",
  country: "United Kingdom",
  category: "Castles",
},
{
  title: "Countryside Organic Farmhouse",
  description:
    "Stay on a working organic farm and enjoy fresh produce, open fields, and a peaceful rural atmosphere.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 1300,
  location: "Punjab",
  country: "India",
  category: "Farms",
},
{
  title: "Skyline Penthouse",
  description:
    "A luxurious penthouse with floor-to-ceiling windows and breathtaking skyline views in a vibrant city center.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
  },
  price: 3900,
  location: "Singapore",
  country: "Singapore",
  category: "Iconic Cities",
},
{
  title: "Lakeside Camping Escape",
  description:
    "Pitch your tent beside a crystal-clear lake and enjoy kayaking, campfires, and peaceful sunsets.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=800&q=60",
  },
  price: 950,
  location: "Nainital",
  country: "India",
  category: "Camping",
},
{
  title: "Mountain Peak Chalet",
  description:
    "A wooden chalet perched high in the mountains with incredible hiking trails and breathtaking scenery.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
  },
  price: 2200,
  location: "Zermatt",
  country: "Switzerland",
  category: "Mountains",
},
{
  title: "Private Pool Retreat",
  description:
    "Enjoy complete privacy in a modern villa featuring a large pool, sun deck, and tropical landscaping.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
  },
  price: 3600,
  location: "Phuket",
  country: "Thailand",
  category: "Pools",
},
{
  title: "Boutique Room in Paris",
  description:
    "A stylish boutique room near famous attractions, cafes, and cultural landmarks in central Paris.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 1900,
  location: "Paris",
  country: "France",
  category: "Rooms",
},
{
  title: "Trending Riverside Loft",
  description:
    "One of the most popular stays featuring industrial interiors, river views, and vibrant nightlife nearby.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 2700,
  location: "Amsterdam",
  country: "Netherlands",
  category: "Trending",
},

// my old data...

{
  title: "Cozy Beachfront Cottage",
  description:
    "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1500,
  location: "Malibu",
  country: "United States",
  category: "Trending",
},
{
  title: "Modern Loft in Downtown",
  description:
    "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "New York City",
  country: "United States",
  category: "Iconic Cities",
},
{
  title: "Mountain Retreat",
  description:
    "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 1000,
  location: "Aspen",
  country: "United States",
  category: "Mountains",
},
{
  title: "Historic Villa in Tuscany",
  description:
    "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 2500,
  location: "Florence",
  country: "Italy",
  category: "Castles",
},
{
  title: "Secluded Treehouse Getaway",
  description:
    "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 800,
  location: "Portland",
  country: "United States",
  category: "Camping",
},
{
  title: "Beachfront Paradise",
  description:
    "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 2000,
  location: "Cancun",
  country: "Mexico",
  category: "Pools",
},
{
  title: "Rustic Cabin by the Lake",
  description:
    "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 900,
  location: "Lake Tahoe",
  country: "United States",
  category: "Mountains",
},
{
  title: "Luxury Penthouse with City Views",
  description:
    "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 3500,
  location: "Los Angeles",
  country: "United States",
  category: "Iconic Cities",
},
{
  title: "Ski-In/Ski-Out Chalet",
  description:
    "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 3000,
  location: "Verbier",
  country: "Switzerland",
  category: "Arctic",
},
{
  title: "Safari Lodge in the Serengeti",
  description:
    "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 4000,
  location: "Serengeti National Park",
  country: "Tanzania",
  category: "Trending",
},

{
  title: "Moonlit Desert Camp",
  description:
    "Enjoy a magical desert camping experience under a sky full of stars with traditional food and cultural performances.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60",
  },
  price: 1400,
  location: "Jaisalmer",
  country: "India",
  category: "Camping",
},
{
  title: "Charming Countryside Farmhouse",
  description:
    "Escape city life and enjoy fresh air, open fields, and farm-to-table meals in this cozy farmhouse.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  price: 1100,
  location: "Nashik",
  country: "India",
  category: "Farms",
},
{
  title: "Ocean View Pool Villa",
  description:
    "Relax in your private infinity pool while enjoying breathtaking views of the ocean.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
  },
  price: 4500,
  location: "Bali",
  country: "Indonesia",
  category: "Pools",
},
{
  title: "Royal Palace Stay",
  description:
    "Experience royal luxury inside a beautifully preserved palace with grand interiors and heritage charm.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
  },
  price: 5000,
  location: "Udaipur",
  country: "India",
  category: "Castles",
},
{
  title: "Snowy Alpine Retreat",
  description:
    "A warm wooden retreat surrounded by snowy mountains and winter adventure activities.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=60",
  },
  price: 2800,
  location: "Innsbruck",
  country: "Austria",
  category: "Arctic",
},
{
  title: "Modern Studio Apartment",
  description:
    "A sleek and comfortable studio apartment located close to public transport and popular attractions.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "Tokyo",
  country: "Japan",
  category: "Rooms",
},
{
  title: "Skyline Luxury Condo",
  description:
    "Enjoy panoramic skyline views and premium amenities in one of the city's most desirable locations.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 3200,
  location: "Dubai",
  country: "UAE",
  category: "Iconic Cities",
},
{
  title: "Himalayan Cliff Cottage",
  description:
    "A peaceful mountain cottage perched on a cliffside with stunning sunrise and valley views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
  },
  price: 1700,
  location: "Shimla",
  country: "India",
  category: "Mountains",
},
{
  title: "Trending Beach Resort",
  description:
    "One of the most popular resorts featuring luxury rooms, beach access, and vibrant nightlife nearby.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=60",
  },
  price: 2600,
  location: "Phuket",
  country: "Thailand",
  category: "Trending",
},
{
  title: "Historic Castle Tower",
  description:
    "Stay inside a centuries-old castle tower offering magnificent architecture and scenic surroundings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1520637836862-4d197d17c35a?auto=format&fit=crop&w=800&q=60",
  },
  price: 4200,
  location: "Prague",
  country: "Czech Republic",
  category: "Castles",
},


{
  title: "Floating Houseboat Escape",
  description:
    "Spend peaceful days on a beautifully designed floating houseboat surrounded by calm waters.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  price: 1900,
  location: "Alleppey",
  country: "India",
  category: "Trending",
},
{
  title: "Luxury Poolside Bungalow",
  description:
    "A modern bungalow with a private pool, outdoor lounge area, and tropical surroundings.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=60",
  },
  price: 3800,
  location: "Goa",
  country: "India",
  category: "Pools",
},
{
  title: "Remote Forest Cabin",
  description:
    "Disconnect from the world and enjoy a quiet retreat deep in the forest surrounded by nature.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60",
  },
  price: 1300,
  location: "Oregon",
  country: "United States",
  category: "Camping",
},
{
  title: "Urban Designer Loft",
  description:
    "A stylish loft featuring contemporary design, open spaces, and a central city location.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
  },
  price: 2100,
  location: "Berlin",
  country: "Germany",
  category: "Iconic Cities",
},
{
  title: "Lavender Farm Retreat",
  description:
    "Stay amidst fragrant lavender fields and enjoy the charm of countryside living.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "Provence",
  country: "France",
  category: "Farms",
},
{
  title: "Ice Fjord Lodge",
  description:
    "A cozy lodge with spectacular views of glaciers, fjords, and snow-covered landscapes.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1517825738774-7de9363ef735?auto=format&fit=crop&w=800&q=60",
  },
  price: 5200,
  location: "Nuuk",
  country: "Greenland",
  category: "Arctic",
},
{
  title: "Swiss Valley Chalet",
  description:
    "A charming chalet nestled in a beautiful alpine valley with hiking trails and mountain views.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502780402662-acc01917d1d0?auto=format&fit=crop&w=800&q=60",
  },
  price: 2400,
  location: "Interlaken",
  country: "Switzerland",
  category: "Mountains",
},
{
  title: "Royal Fort Residence",
  description:
    "Experience historic grandeur in a restored fort transformed into a luxury residence.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60",
  },
  price: 4700,
  location: "Jodhpur",
  country: "India",
  category: "Castles",
},
{
  title: "Budget Traveler Room",
  description:
    "Comfortable and affordable accommodation perfect for solo travelers and backpackers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=60",
  },
  price: 800,
  location: "Bangkok",
  country: "Thailand",
  category: "Rooms",
},
{
  title: "Waterfront City Apartment",
  description:
    "Enjoy waterfront views and vibrant city life from this centrally located apartment.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  },
  price: 2600,
  location: "Sydney",
  country: "Australia",
  category: "Iconic Cities",
},
{
  title: "Trending Cliffside Villa",
  description:
    "A highly rated villa perched on dramatic cliffs with unforgettable ocean sunsets.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
  },
  price: 5500,
  location: "Santorini",
  country: "Greece",
  category: "Trending",
},


];

module.exports = { data: sampleListings };