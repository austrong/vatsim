document.getElementById('routingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var departureAirport = document.getElementById('departureAirport').value.toUpperCase();
    var arrivalAirport = document.getElementById('arrivalAirport').value.toUpperCase();

    // Get the route based on the airports
    var route = getRoute(departureAirport, arrivalAirport);

    // Display the route
    document.getElementById('routeDisplay').innerText = route;
});

const routes = {
    "KEWR-KPDX": "GAYEL Q818 WOZEE Q917 SSM APUNY OGSIQ LWT PDT JKNOX HHOOD4",
    "KATL-KLAX": "NASSA2 YAALL J14 PNH J6 DRK J231 HIPPI GABBL HLYWD1",
    "KATL-KPDX": "CUTTN2 HANKO GAD MEMFS ARG SGF KK48G KK60E KP66C KD72A KU87S KU06M KS06K CHASS J16 PDT JKNOX HHOOD4",
    "KATL-KSEA": "PENCL2 JAACE BNA DRIVL PWE KD72YKU81S PDT CHINS4",
    "KATL-KSFO": "NASSA2 CHOOK MEM VLUST Q128 ZAROSQ128 FLOOD J28 BDROC ELLMU HVE J28 MLF KITTN Q164 KATTS INYOE DYAMD5",
    "KCLT-KPDX": "JOJJO4 DOOGE FLM J24 VHP JOT DBQ MCW J16 PDT JKNOX HHOOD4",
    "KPDX-KBOS": "LAVAA6 PDT HLN J90 MLS KP06Y KP06C GOLLF KP03K SIKBO Q140 AHPAH JOSSY PONCT JFUND2",
    "KPDX-KMIA": "LAVAA6 PDT J20 LAA J168 SPS J58 HRV Q105 BLVNS Y290 GAWKS FROGZ1",
    "KPDX-KEWR": "LAVAA6 PDT J16 HIA KU03S LSCOM KEKPE/N0464F390 KP90E WIDIS KP87I OSH KG81O KC78Q GNTRY KC69W SLT FQM3",
    "KPDX-KMCO": "TIMEE KU84K KU75Q CKW KD60Y LYGHT KM39G UJM ACORI DEEDA",
    "DEN-GUM": "Generate your own route at https://simbrief.com.",
};

function getRoute(departureAirport, arrivalAirport) {
    departureAirport = departureAirport.toUpperCase();
    arrivalAirport = arrivalAirport.toUpperCase();
    
    const routeKey = departureAirport + '-' + arrivalAirport;
    
    if (routes.hasOwnProperty(routeKey)) {
        return routes[routeKey];
    } else {
        return "Route not found.";
    }
}
