import { FastifyInstance, RouteOptions } from "fastify";
import * as postsController from '../controllers/posts.controller';
import { postBodySchema, postBodyType } from './schemas/posts.schemas';


export default function createPost(fastify:FastifyInstance): RouteOptions {
    return {
        method: 'POST',
        url: '/api/posts',
        schema: {
            body: postBodySchema
        },
        handler: async (request, reply) =>{
            const body = request.body as postBodyType;
            const posts = await postsController.createPost(body);
            if(!posts){
                reply.code(201).send({posts});
            }else{
                reply.code(400).send({posts})
            }
        },
    };
    
}