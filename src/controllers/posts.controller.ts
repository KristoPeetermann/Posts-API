import * as postModel from '../models/posts.models';
import { postBodyType, stringType } from '../routes/schemas/posts.schemas';

export async function getPosts() {
    try{
        return await postModel.getPosts();
    } catch (error){
        throw new Error("oh no");
    }
}

export async function getPost(id:number){
    try{
        return await postModel.getPost(id);
    } catch (error){
        throw new Error("oh no");
    }
}
export async function deletePost(id:number){
    try{
        return await postModel.deletePost(id);
    } catch (error){
        throw new Error("oh no");
    }
}
export async function createPost(post: postBodyType){
    try{
        return await postModel.createPost(post);
    } catch (error){
        throw new Error("oh no");
    }
}
export async function searchPost(search: stringType, filterByTag?: stringType ,sortByLikes?: stringType){
    try{
        return await postModel.searchPost(search);
    }catch (error){
        throw new Error("oh no")
    }
}