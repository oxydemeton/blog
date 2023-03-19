import {pb} from "$lib/pocketbase"
import {loadPostAuthor} from "$lib/DbUtil"
import type { Post, User } from "$lib/DbInterfaces";
import { error } from "@sveltejs/kit";
export async function load({params}) {
    const post = await pb.collection('posts').getOne(params.id).catch(()=> {
        throw error(404, {
            message: 'Post not found'
          });
    });
    //post.creatorExtend = await loadPostAuthor(post as unknown as Post)
    return {
        post: post as unknown as Post
    }
}