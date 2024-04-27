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
    if (departureAirport === "KDEN" && arrivalAirport === "KCOS") {
        return "Route: LUFSE V389 ADANE BRK";
    } else {
        return "Route not found.";
    }
    if (departureAirport === "KDEN" && arrivalAirport ==="KORD") {
        return "Route: EEONS8 WYNDM OBH FOD MYRRS FYTTE7";
    } else {
        return "Route not found.";
    }
}
