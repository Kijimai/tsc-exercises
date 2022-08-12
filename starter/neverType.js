"use strict";
function generateError(message, code) {
    throw { message, errorCode: code };
}
generateError("An Error Occured!", 500);
