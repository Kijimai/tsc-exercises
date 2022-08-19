"use strict";
// does not needed strict type declaration
let logged;
// needs strict type declaration
function sendAnalytics(data) {
    console.log(data);
    logged = true;
    console.log(logged);
}
sendAnalytics({ data: "The Data" });
// sendAnalytics("The Data")
