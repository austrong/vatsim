document.getElementById('routingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var departureAirport = document.getElementById('departureAirport').value.toUpperCase();
    var arrivalAirport = document.getElementById('arrivalAirport').value.toUpperCase();

    // Get the route based on the departure and arrival airports
    var route = getRoute(departureAirport, arrivalAirport);

    // Display the route
    document.getElementById('routeDisplay').innerText = route;
});

// Define a JavaScript object to store routes for each airport pair
const routes = {
    "KEWR-KPDX": "GAYEL Q818 WOZEE Q917 SSM APUNY OGSIQ LWT PDT JKNOX HHOOD4",
    "KATL-KLAX": "NASSA2 YAALL J14 PNH J6 DRK J231 HIPPI GABBL HLYWD1",
    "KATL-KPDX": "CUTTN2 HANKO GAD MEMFS ARG SGF KK48G KK60E KP66C KD72A KU87S KU06M KS06K CHASS J16 PDT JKNOX HHOOD4",
    "KATL-KSEA": "PENCL2 JAACE BNA DRIVL PWE KD72Y KU81S PDT CHINS4",
    "KATL-KSFO": "NASSA2 CHOOK MEM VLUST Q128 ZAROSQ128 FLOOD J28 BDROC ELLMU HVE J28 MLF KITTN Q164 KATTS INYOE DYAMD5",
    // Add more routes as needed
};

// Function to get the route based on departure and arrival airports
function getRoute(departureAirport, arrivalAirport) {
    departureAirport = departureAirport.toUpperCase();
    arrivalAirport = arrivalAirport.toUpperCase();
    
    // Construct the key for the routes object
    const routeKey = departureAirport + '-' + arrivalAirport;
    
    // Check if the route exists in the routes object
    if (routes.hasOwnProperty(routeKey)) {
        return routes[routeKey];
    } else {
        return "Route not found for the specified airports.";
    }
}

// Example usage:
console.log(getRoute("KEWR", "KPDX")); // Output: GAYEL Q818 WOZEE Q917 SSM APUNY OGSIQ LWT PDT JKNOX HHOOD4
console.log(getRoute("KATL", "KLAX")); // Output: NASSA2 YAALL J14 PNH J6 DRK J231 HIPPI GABBL HLYWD1
