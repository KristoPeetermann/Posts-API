"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPost = exports.deletePost = exports.createPost = exports.getPost = exports.getPosts = void 0;
const posts = [
    {
        text: `Barbie M`,
        likes: 40,
        hashtags: []
    },
    {
        text: `Oppenheimerr`,
        likes: 1,
        hashtags: ["Barbie", "movies"]
    },
    {
        text: `Boomermoooovie`,
        likes: 2,
        hashtags: ["old", "people"]
    },
    {
        text: `Movieesare cool`,
        likes: 60,
        hashtags: ["old", "people"]
    }
];
async function getPosts() {
    return structuredClone(posts);
}
exports.getPosts = getPosts;
async function getPost(id) {
    return structuredClone(posts[id]);
}
exports.getPost = getPost;
async function createPost(post) {
    const newPost = {
        text: post.text,
        likes: 0,
        hashtags: post.hashtags ?? [],
    };
    posts.push(newPost);
    return structuredClone(newPost);
}
exports.createPost = createPost;
async function deletePost(id) {
    posts.splice(id, 1);
}
exports.deletePost = deletePost;
async function searchPost(search) {
    return new Promise((resolve) => {
        const filteredPosts = posts.filter((item) => {
            const textMatch = item.text.includes(search.text);
            const tagMatch = !search.filter_by_tag || item.hashtags.includes(search.filter_by_tag);
            return textMatch && tagMatch;
        });
        if (search.sort_by_likes == "yes") {
            const sortedPosts = filteredPosts.sort(({ likes: a }, { likes: b }) => b - a);
            resolve(sortedPosts);
        }
        resolve(filteredPosts);
    });
}
exports.searchPost = searchPost;
//# sourceMappingURL=posts.models.js.map