import Fastify, { FastifyInstance } from "fastify";
import routes from "./routes";

const fastify: FastifyInstance = Fastify();

fastify.register(routes);

fastify.listen({host: '127.0.0.1', port : 3000}).then((address) =>{
    console.log(`Server is running on ${address}`);
}).catch((error) =>{
    console.log(`Server is not running`);
    console.log(`reason ${error}`);
    process.exit(1);
});

// async function appInit(fastify: FastifyInstance){
//     try{
//         await fastify.listen({host: '127.0.0.1', port : 3000});
//         console.log(`Server is running on`);
//     } catch (error){
//         console.log(`Server is not running`);
//     console.log(`reason ${error}`);
//     process.exit(1);
//     }
// }