import { Static, Type } from '@sinclair/typebox';

export const postBodySchema = Type.Object({
    text: Type.String(),
    hashtags: Type.Optional(Type.Array(Type.String())),
});

export type postBodyType = Static<typeof postBodySchema>;

export const numberSchema = Type.Object({
    id: Type.Number(),
})
export type numberType = Static<typeof numberSchema>

export const stringSchema = Type.Object({
    text: Type.String(),
    filter_by_tag: Type.Optional(Type.String()),
    sort_by_likes: Type.Optional(Type.String()),

})

export type stringType = Static<typeof stringSchema>

// export const bodySchema = {
//     type: 'object',
//     properties : {
//         text:{
//             type:"string"
//         },
//         hashtags:{
//             type: "array",
//             items: {
//                 type: "string"
//                 },
//             },
        
//         },
//         required: ["text"],
//     };

// export interface postBodyType {
//     text: string,
//     hashtags: [string]
// }