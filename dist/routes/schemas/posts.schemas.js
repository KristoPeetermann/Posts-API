"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringSchema = exports.numberSchema = exports.postBodySchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.postBodySchema = typebox_1.Type.Object({
    text: typebox_1.Type.String(),
    hashtags: typebox_1.Type.Optional(typebox_1.Type.Array(typebox_1.Type.String())),
});
exports.numberSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
});
exports.stringSchema = typebox_1.Type.Object({
    text: typebox_1.Type.String(),
    filter_by_tag: typebox_1.Type.Optional(typebox_1.Type.String()),
    sort_by_likes: typebox_1.Type.Optional(typebox_1.Type.String()),
});
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
//# sourceMappingURL=posts.schemas.js.map