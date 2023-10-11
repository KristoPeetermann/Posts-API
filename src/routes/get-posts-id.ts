import { FastifyInstance, RouteOptions } from "fastify";
import * as postsController from '../controllers/posts.controller';
import { numberSchema, numberType } from "./schemas/posts.schemas";


export default function getPost(fastify:FastifyInstance): RouteOptions {
    return {
        method: 'GET',
        url: '/api/posts/:id',
        schema: {
            params: numberSchema
        },
        handler: async (request, reply) =>{
            const params = request.params as numberType;
            const posts = await postsController.getPost(params.id);
            if(!posts){
                reply.code(404).send(posts);
            }else{
                reply.code(200).send(posts);
            }
        },
    };
    
}