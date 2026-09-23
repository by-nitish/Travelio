console.log("INDEX MAP LOADED");

const indexMap = L.map("index-map").setView([20.5937, 78.9629], 1);
let markers = L.markerClusterGroup();

indexMap.scrollWheelZoom.disable();


const roadMap = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
});

const satelliteMap = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
        maxZoom: 19,
        attribution: "Tiles &copy; Esri",
    }
);

const darkMap = L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    {
        maxZoom: 19,
        attribution: "&copy; CartoDB",
    }
);

roadMap.addTo(indexMap);

const baseMaps = {
    "Road Map": roadMap,
    "Satellite": satelliteMap,
    "Dark Map": darkMap,
};

L.control.layers(baseMaps).addTo(indexMap);




// // Red Marker Icon
// const redIcon = L.icon({
//     iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
//     iconSize: [40, 40],
//     iconAnchor: [20, 40],
//     popupAnchor: [0, -35],
// });

const blueIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});




for (let listing of listings) {
    if (
        listing.geometry &&
        typeof listing.geometry.lat === "number" &&
        typeof listing.geometry.lng === "number" &&
        !isNaN(listing.geometry.lat) &&
        !isNaN(listing.geometry.lng)
    ) {
       let marker = L.marker(
            [listing.geometry.lat, listing.geometry.lng],
            { icon: blueIcon }
        ).bindPopup(`
            <div style="text-align:center;">
                <b>${listing.title}</b><br>
                ${listing.location}, ${listing.country}<br>
                <a href="/listings/${listing._id}">View Listing</a>
            </div>
        `);
        markers.addLayer(marker);
    }
}
indexMap.addLayer(markers);
// if (markers.getLayers().length > 0) {
//     indexMap.fitBounds(markers.getBounds(), {
//         padding: [50, 50],
//     });
// }