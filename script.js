document.getElementById('routingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var departureAirport = document.getElementById('departureAirport').value.toUpperCase();
    var arrivalAirport = document.getElementById('arrivalAirport').value.toUpperCase();

    // Here you can implement the logic to fetch the route based on departure and arrival airports
    // For this example, let's hardcode the route for DEN-COS
    var route = getRoute(departureAirport, arrivalAirport);

    // Display the route
    document.getElementById('routeDisplay').innerText = route;
});

function getRoute(departureAirport, arrivalAirport) {
    if (departureAirport === "DEN" && arrivalAirport === "COS") {
        // Hardcoded route for DEN-COS
        return "Route: LUFSE V389 ADANE BRK";
    } else {
        return "Route not found for the specified airports.";
    }
}
