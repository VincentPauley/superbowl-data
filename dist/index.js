"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = __importDefault(require("./data"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send(JSON.stringify(data_1.default));
});
app.listen(port, () => {
    console.log('server is runnning on port 3000');
});
