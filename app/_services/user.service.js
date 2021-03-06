"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        var token = localStorage.getItem('token');
        if (token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + token });
            console.log(headers);
            this.options = new http_1.RequestOptions({ headers: headers });
        }
    }
    UserService.prototype.getAll = function () {
        return this.http.get('http://localhost:3001/user', this.options).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('http://localhost:3001/user/' + id, this.options).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('http://localhost:3001/user/', user, this.options).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put('http://localhost:3001/user/' + user._id, user, this.options).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('http://localhost:3001/user/' + id, this.options).map(function (response) { return response.json(); });
    };
    UserService.prototype.ngOnInit = function () {
        var currentUser;
        try {
            currentUser = JSON.parse(localStorage.getItem('user'));
        }
        catch (e) {
        }
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map