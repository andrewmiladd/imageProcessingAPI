"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var PORT = 3000;
var application = (0, express_1.default)();
application.use('/api', routes_1.default);
application.get('/', function (req, res) {
    res.status(200).json({
        message: 'welcome to our application'
    });
});
application.listen(PORT, function () {
    // eslint-disable-next-line no-console
    console.log("Server is starting at prot:".concat(PORT));
});
exports.default = application;
