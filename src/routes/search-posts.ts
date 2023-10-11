import { FastifyInstance, RouteOptions } from "fastify";
import * as postsController from "../controllers/posts.controller";
import { stringSchema, stringType } from "./schemas/posts.schemas";


export default function searchPost(fastify:FastifyInstance): RouteOptions {
    return {
        method: 'GET',
        url: '/api/posts/search',
        schema: {
            querystring: stringSchema
        },
        handler: async (request, reply) =>{
            const text = request.query as stringType;
            const filterByTag = request.query as stringType;
            const sortByLikes = request.query as stringType;
            const posts= await postsController.searchPost(text, filterByTag, sortByLikes);
            if(!posts){
                reply.code(404).send(posts);
            }else{
                reply.code(200).send(posts);
            }
        },
    };
    
}