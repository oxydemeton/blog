import {pb} from "$lib/pocketbase"
import {loadPostAuthor} from "$lib/DbUtil"
import type { Post } from "$lib/DbInterfaces";
export async function load() {
    const {items: [latest_post]} = await pb.collection('posts').getList(1, 1, {
        sort: '-created'
    })
    latest_post.creatorExtend = await loadPostAuthor(latest_post as unknown as Post)    
    return {
        latest_post
    }
}