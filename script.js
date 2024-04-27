document.getElementById('routingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var departureAirport = document.getElementById('departureAirport').value.toUpperCase();
    var arrivalAirport = document.getElementById('arrivalAirport').value.toUpperCase();

    // Get the route based on the departure and arrival airports
    var route = getRoute(departureAirport, arrivalAirport);

    // Display the route
    document.getElementById('routeDisplay').innerText = route;
});

function getRoute(departureAirport, arrivalAirport) {
    if (departureAirport === "KDEN" && arrivalAirport === "KCOS") {
        return "Route: LUFSE V389 ADANE BRK";
    } else if (departureAirport === "KDEN" && arrivalAirport === "KORD") {
        return "Route: EEONS8 WYNDM OBH FOD MYRRS FYTTE7";
    } else if (departureAirport === "KDEN" && arrivalAirport === "KICT") {
        return: "Route: This works, but I don't have a route";
    } else {
        return "Route not found for the specified airports.";
    }
}
