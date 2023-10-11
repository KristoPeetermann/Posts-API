import { FastifyInstance, RouteOptions } from "fastify";
import * as postsController from '../controllers/posts.controller';
import { numberSchema, numberType } from './schemas/posts.schemas';

export default function deletePost(fastify:FastifyInstance): RouteOptions {
    return {
        method: 'DELETE',
        url: '/api/posts/delete/:id',
        schema: {
            params: numberSchema
        },
        handler: async (request, reply) =>{
            const params = request.params as numberType;
            await postsController.deletePost(params.id);
            reply.code(200).send({success:  true});
        },
    };
    
}