"use strict";
const btn = document.querySelector("button");
function clickHandler(message) {
    let username = 'mee';
    console.log("Clicked", message);
}
if (btn) {
    btn.addEventListener("click", clickHandler.bind(null, "You're welcome"));
}
console.log("test");
//# sourceMappingURL=app.js.map