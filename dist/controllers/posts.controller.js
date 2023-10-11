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
exports.searchPost = exports.createPost = exports.deletePost = exports.getPost = exports.getPosts = void 0;
const postModel = __importStar(require("../models/posts.models"));
async function getPosts() {
    try {
        return await postModel.getPosts();
    }
    catch (error) {
        throw new Error("oh no");
    }
}
exports.getPosts = getPosts;
async function getPost(id) {
    try {
        return await postModel.getPost(id);
    }
    catch (error) {
        throw new Error("oh no");
    }
}
exports.getPost = getPost;
async function deletePost(id) {
    try {
        return await postModel.deletePost(id);
    }
    catch (error) {
        throw new Error("oh no");
    }
}
exports.deletePost = deletePost;
async function createPost(post) {
    try {
        return await postModel.createPost(post);
    }
    catch (error) {
        throw new Error("oh no");
    }
}
exports.createPost = createPost;
async function searchPost(search, filterByTag, sortByLikes) {
    try {
        return await postModel.searchPost(search);
    }
    catch (error) {
        throw new Error("oh no");
    }
}
exports.searchPost = searchPost;
//# sourceMappingURL=posts.controller.js.map