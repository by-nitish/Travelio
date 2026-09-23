

if (coordinates) {

    const map = L.map("map").setView(
        [coordinates.lat, coordinates.lng],
        13
    );

map.scrollWheelZoom.disable();

const roadMap = L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors",
    }
);

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

roadMap.addTo(map);

const baseMaps = {
    "Road Map": roadMap,
    "Satellite": satelliteMap,
    "Dark Map": darkMap,
};

L.control.layers(baseMaps).addTo(map);
L.control.scale().addTo(map);

// Custom Icon
const customIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",

    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
});

// Marker
L.marker(
    [coordinates.lat, coordinates.lng],
    { icon: customIcon }
)
.addTo(map)
.bindPopup(`
        <b>${listingInfo.title}</b><br>
        ${listingInfo.location}, ${listingInfo.country}
    `)
.openPopup();

};