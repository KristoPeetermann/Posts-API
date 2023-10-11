import { FastifyInstance, RouteOptions } from "fastify";
import * as postsController from '../controllers/posts.controller';

export default function getPosts(fastify:FastifyInstance): RouteOptions {
    return {
        method: 'GET',
        url: '/api/posts',
        handler: async (request, reply) =>{
            const posts = await postsController.getPosts();
            reply.code(200).send(posts);
        },
    };
    
}