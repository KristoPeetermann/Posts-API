import { postBodyType, stringType } from '../routes/schemas/posts.schemas';
export interface Post {
    text: string;
    likes: number;
    hashtags: string[];
}

const posts = [
    {
        text: `Barbie M`,
        likes: 40,
        hashtags: []
    },
    {
        text: `Oppenheimerr`,
        likes: 1,
        hashtags: ["Barbie","movies"]
    },
    {
        text: `Boomermoooovie`,
        likes: 2,
        hashtags: ["old","people"]
    },
    {
        text: `Movieesare cool`,
        likes: 60,
        hashtags: ["old","people"]
    }
]

export async function getPosts(): Promise<Post[]> {
    return structuredClone(posts);
}
export async function getPost(id: number):Promise<Post> {
    return structuredClone(posts[id]);
}

export async function createPost(post:postBodyType
) : Promise<Post> {
    const newPost: Post = {
        text: post.text,
        likes: 0,
        hashtags: post.hashtags ?? [],
    };

    posts.push(newPost);
    return structuredClone(newPost);
    
}

export async function deletePost(id:number): Promise<void> {
    posts.splice(id,1);
}
export async function searchPost(search:stringType): Promise<Post[]>{
        const filteredPosts = posts.filter((item) => {
            const textMatch = item.text.includes(search.text);
            const tagMatch = !search.filter_by_tag || item.hashtags.includes(search.filter_by_tag);
            return textMatch && tagMatch;
        });
        if(search.sort_by_likes == "yes"){
            const sortedPosts = filteredPosts.sort(({likes:a},{likes:b}) => b-a);
            return(sortedPosts);
        }
        return(filteredPosts);
}