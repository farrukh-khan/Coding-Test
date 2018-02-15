﻿'use strict';
angular.module('naut').factory('sharedService', ['$http', '$q', 'localStorageService', 'ngAuthSettings',
    function ($http, $q, localStorageService, ngAuthSettings) {

        var serviceBase = ngAuthSettings.apiServiceBaseUri + "api/";
        var sharedServiceFactory = {};

        var _getSharedWithUrl = function (url) {

            return $http.get(serviceBase + url).then(function (response) {
                return response;
            });
        };

     

        var _getShareds = function (model, url) {
            
            return $http.post(serviceBase + url, model).then(function (response) {
                return response;
            });

        };

        var _SharedSubmit = function (model, url) {

            return $http.post(serviceBase + url, model).then(function (response) {
                return response;
            });

        };
        var _delete = function (url) {

            return $http.get(serviceBase + url).then(function (response) {
                return response;
            });

        };

        var _getExcelReport = function (model, url) {

            return $http.post(serviceBase + url, model, { responseType: 'arraybuffer' }).then(function (response) {
                return response;
            });
        };


        var _getPdfReport = function (model, url) {

            return $http.post(serviceBase + url, model, model, { responseType: 'arraybuffer' }).then(function (response) {
                return response;
            });

        };


        sharedServiceFactory.getShareds = _getShareds;
        sharedServiceFactory.SharedSubmit = _SharedSubmit;
        sharedServiceFactory.delete = _delete;
        sharedServiceFactory.getExcelReport = _getExcelReport;
        sharedServiceFactory.getSharedWithUrl = _getSharedWithUrl;        
        sharedServiceFactory.getPdfReport = _getPdfReport;

        return sharedServiceFactory;
    }]);