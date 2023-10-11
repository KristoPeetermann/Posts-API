"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_posts_id_1 = __importDefault(require("./delete-posts-id"));
const get_posts_1 = __importDefault(require("./get-posts"));
const get_posts_id_1 = __importDefault(require("./get-posts-id"));
const post_posts_1 = __importDefault(require("./post-posts"));
const search_posts_1 = __importDefault(require("./search-posts"));
async function default_1(fastify) {
    fastify.route((0, get_posts_1.default)(fastify));
    fastify.route((0, get_posts_id_1.default)(fastify));
    fastify.route((0, delete_posts_id_1.default)(fastify));
    fastify.route((0, post_posts_1.default)(fastify));
    fastify.route((0, search_posts_1.default)(fastify));
}
exports.default = default_1;
//# sourceMappingURL=index.js.map