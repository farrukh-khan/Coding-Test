﻿"use strict";
angular.module('naut').factory("logger", [
function () {
    var logIt;
    return toastr.options = {
        closeButton: !0,
        positionClass: "toast-top-right",
        timeOut: "3000"
    }, logIt = function (message, type) {
        return toastr[type](message)
    }, {
        log: function (message) {
            logIt(message, "info")
        },
        logWarning: function (message) {
            logIt(message, "warning")
        },
        logSuccess: function (message) {
            logIt(message, "success")
        },
        logError: function (message) {
            logIt(message, "error")
        }
    }
}
]);