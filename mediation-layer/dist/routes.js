"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiService_1 = __importDefault(require("./apiService"));
const router = (0, express_1.Router)();
router.get('/data', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield apiService_1.default.fetchData();
        res.json(data);
    }
    catch (error) {
        const err = error;
        console.error('Error fetching data:', err);
        res.status(500).json({ error: err.message || 'Failed to fetch data' });
    }
}));
exports.default = router;
