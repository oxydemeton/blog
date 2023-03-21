import {pb} from "$lib/pocketbase"
import { error } from "@sveltejs/kit";
import type { Post } from "$lib/DbInterfaces";

export async function load({params}) {
    const post = await pb.collection('posts').getOne(params.id, {expand: 'creator, comments(post).creator'}).catch(()=> {
        throw error(404, {
            message: 'Post not found'
          });
    });    
    post.creatorExtend = post.expand.creator
    //post.creatorExtend = await loadPostAuthor(post as unknown as Post)
    return {
        post: post as unknown as Post
    }
}