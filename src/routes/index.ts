import { FastifyInstance } from "fastify";

import deletePost from "./delete-posts-id";
import getPosts from "./get-posts";
import getPost from "./get-posts-id";
import createPosts from "./post-posts";
import searchPost from "./search-posts";

export default async function(fastify: FastifyInstance){
    fastify.route(getPosts(fastify));
    fastify.route(getPost(fastify));
    fastify.route(deletePost(fastify));
    fastify.route(createPosts(fastify));
    fastify.route(searchPost(fastify));
}