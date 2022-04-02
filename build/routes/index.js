"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var imageRoute_1 = __importDefault(require("./api/imageRoute"));
var routes = (0, express_1.Router)();
routes.use('/image', imageRoute_1.default);
exports.default = routes;
