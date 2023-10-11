"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const postsController = __importStar(require("../controllers/posts.controller"));
const posts_schemas_1 = require("./schemas/posts.schemas");
function searchPost(fastify) {
    return {
        method: 'GET',
        url: '/api/posts/search',
        schema: {
            querystring: posts_schemas_1.stringSchema
        },
        handler: async (request, reply) => {
            const text = request.query;
            const filterByTag = request.query;
            const sortByLikes = request.query;
            const posts = await postsController.searchPost(text, filterByTag, sortByLikes);
            if (!posts) {
                reply.code(404).send(posts);
            }
            else {
                reply.code(200).send(posts);
            }
        },
    };
}
exports.default = searchPost;
//# sourceMappingURL=search-posts.js.map