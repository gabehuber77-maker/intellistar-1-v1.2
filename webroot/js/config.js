var api_key = '71f92ea9dd2f4790b92ea9dd2f779061';
var map_key = 'YOUR_MAP_KEY';
var traf_key = 'YOUR_TRAFFIC_KEY';

var appearanceSettings = {
    marqueeAd: [
        "Starting Watching Work It out Wombats Hanukkah & The Snowy Day & The Fishman's Menorah? It will be start in November 23rd. Only On PBS Kids.",
        "Simply Looking At the WIOW Renders? Go Ahead And join in to look all of the wombats pictures. Visit discord.gg/te78Htas5h right now!",
        "It's The Holiday Season. And Where we started on Christmas Station. If you already had your christmas music, then your in! But If you listening to regular music, Then the christmas music will be coming up after thanksgiving. Thank You!",
        "Also check out other sims on archive.org/details/@gabe_huber_2, your place for Local on the 8s simulations!",
        "GO Faster, Do More, Wait Less! Call now to sign up for Snout Cable High-Speed Internet! Special offer available at 1-888-GET-SNOUT",
        "GRAND OPENING OF NORTH STAR POINTE! NOV 19&20. DOCKABLE LAKE FRONT FROM $99,900. LAKE ACCESS HOME SITES FROM $34,900. EXCELLENT FINANCING. PAY NO CLOSING COSTS! JUST MINUTES FROM DFW. DON’T MISS OUT! CALL 1-800-710-0977. NORTH STAR POINTE. CALL 1-800-710-0977. 1-800-710-0977"
        "Put The Weather Crawl to work for your business. Call Leslie Johnson at (605) 965-9354 to see how easy and affordable it is to advertise with The Weather Channel Local Forecast crawl.",
        "The world will be watching as teams from USA and Europe go head-to-head in Scotland. Every Tuesday, Twelve men will battle for the ultimate prize-European Tour Exemptions. The Big Break IV: USA VS Europe. Premieres Tuesday, September 13th at 9/8 PM CST on PrairieWave Channel 55.",
        "Beginning November 1, sign up for HD service and receive 2 months FREE! Promotion includes HD programming and equipment. Promotion ends December 31, 2005. Call 1-877-633-4567 to sign up today. Not available in all areas.",
        "Win the star treatment in the Hollywood Holiday Sweepstakes! Watch Hallmark Channel on PrairieWave Digital Channel #110 Saturday nights through 12/24 at 9/8 CST for your chance to call in & win. Sweepstakes ends 12/24/05. For complete details visit www.hallmarkchannel.com",
        "In The Polar Express, a young boy longs to believe in Santa Claus, and on Christmas Eve a mysterious train visits him, promising to take him to the North Pole. The train\'s conductor helps turn his crisis in faith into a journey of self-discovery. Premiering Dec. 23 on VOD.",
        "Sign up for Digital Cable and receive 1 month FREE and 1 FREE Video On Demand movie ($3.99 value). Promotion ends January 31, 2006. Call 1-877-633-4567 to sign up today. Certain restrictions apply. Not available in all areas or in conjunction with any other offer."
    ],
    localWeatherID: "XXXXX", //Keep it at XXXXX to generate a random local weather ID. Otherwise, put a 5 digit number.
    iconSet: "2007", //Choices are 2007 or 2010. 2010 icons appear in 2010-present versions, 2007 is between 2006-2010.
    ldlType: 'both', //what you want to see on ldl. 'observations' = only observations / 'both' = both / if anything else is put here, the sim will default to only observations
    startupTime: 4000, //How long you want to wait for it to start up.
    graphicsPackage: 2010, //the package for graphics. 2007 will have blue text, while 2008 will have black text. Everything 2009 and above includes blue LDL. 2010 changes the icons.
    version: "1.2"
}

var slideSettings = {
    flavor: '120',
    bulletin: false,
    precip: false,
    auto: true,
    order: [
        {function:"currentConditions",slideDelay:8000},
        {function:"mapCurrent",slideDelay:8000},
        {function:"radarDoppler",slideDelay:8000},
        {function:"localDoppler",slideDelay:12000},
        {function:"almanac",slideDelay:8000},
        {function:"airQuality",slideDelay:8000},
        {function:"outdoorActivity",slideDelay:8000},
        {function:"daypartForecast",slideDelay:8000},
        {function:"mapForecast",slides:2,slideDelay:7000},
        {function:"localForecast",slides:4,slideDelay:7500},
        {function:"weekAhead",slideDelay:8000},
    ]
}

var audioSettings = {
    enableMusic: true, //Self-explanatory. Default is true.
    shuffle: true, //Self-explanatory. Default is true.
    randomStart: true, //Also should be self-explanatory. Default is true.
    narrations: true, //Also should be self-explanatory. Default is true.
    vocallocal: false, //Only affects local forecast vocal local, changes the phrase from naming the exact date to just "your local forecast"
    order: [
        "Track 1",
        "Track 2",
        "Track 3",
        "Track 4",
        "Track 5",
        "Track 6",
        "Track 7",
        "Track 8",
        "Track 9",
        "Track 10",
        "Track 11",
        "Track 12",
    ],
    offset: 0 //How far in you want the song to start. An offset of 10 will start the song 10 seconds in.
}

var locationSettings = {/*This is what you can edit, anything under the lcationSettings object
    you can change it if you want but why would you when there's a settings panel to change this stuff.*/
    mainCity: {
        autoFind: true, //set to false if you want to manually set the location
        displayname:"",//set this to whatever you want the main location's name to be
        extraname:"",
        type:"",//choose the following types from below:
        //geocode -- (coordinates)
        //postalKey -- (zip code)
        //iataCode -- (IATA airport code)
        //icaoCode -- (ICAO airport code)
        //placeid -- (PLace ID)
        //canonicalCityId -- (Canonical City ID)
        //locud -- (Location ID)
        val:"",//the value that goes with the type. Like if you select iataCode, the val would be JFK if you want JFK Airport. 
        //===NOTES===
        //if you use geocode (coordinates), you must use the format "latitude,longitude" for the val
        //if you use postalKey (zipcode), you must put ":US" after the zip code. I may be wrong about this but to be safe put it after the code.
    },
    eightCities: {
        autoFind: true,
        //same guidelines as mainCity location settings as the eight nearby locations.
        cities:[//if you use less than 8 locations, please delete the unused cities objects.
            {
                displayname:"",
                type:"",
                val:"",
            },
            {
                displayname:"",
                type:"",
                val:"",
            },
            {
                displayname:"",
                type:"",
                val:"",
            },
            {
                displayname:"",
                type:"",
                val:"",
            },
            {
                displayname:"",
                type:"",
                val:"",
            },
            {
                displayname:"",
                type:"",
                val:"",
            },
            {
                displayname:"",
                type:"",
                val:"",
            },
            {
                displayname:"",
                type:"",
                val:"",
            },
        ]
    },
    mapCities: {
        autoFind: true,
        leftPos: "",
        topPos: "", //center of the map, leave blank if you are using autoFind. Example: {left: "-3030px", top: "600px"}
        cities: [
            {
                name: "",
                type: "",
                val: "",
                left: "",
                top: "" //where the city will be positioned. Example: left: "414px", top: "313px"
            },
        ]
    },
    radarCities: {
        local: [
            {locationName:"",dotTopPos:"",dotLeftPos:"",nameTopMargin:"",nameLeftMargin:""}
        ],
        regional: [
        ],
    }
}
