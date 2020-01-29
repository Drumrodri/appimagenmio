"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ 'message': 'estas en el inicio' });
    }
}
exports.indexController = new IndexController;
