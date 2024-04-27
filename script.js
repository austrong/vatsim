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
    departureAirport = departureAirport.toUpperCase();
    arrivalAirport = arrivalAirport.toUpperCase();

    switch (departureAirport + '-' + arrivalAirport) {
        case 'KEWR-KPDX':
            return "GAYEL Q818 WOZEE Q917 SSM APUNY OGSIQ LWT PDT JKNOX HHOOD4";
        case 'KATL-KLAX':
            return "NASSA2 YAALL J14 PNH J6 DRK J231 HIPPI GABBL HLYWD1";
        case 'KATL-KPDX':
            return "CUTTN2 HANKO GAD MEMFS ARG SGF KK48G KK60E KP66C KD72A KU87S KU06M KS06K CHASS J16 PDT JKNOX HHOOD4";
        case 'KATL-KSEA':
            return "PENCL2 JAACE BNA DRIVL PWE KD72Y KU81S PDT CHINS4";
        default:
            return "Route not found for the specified airports.";
    }
}
