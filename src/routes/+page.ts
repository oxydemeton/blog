import {pb} from "$lib/pocketbase"
import type { Post, User } from "$lib/DbInterfaces";
export const ssr = false;
export async function load() {
    const {items} = await pb.collection('posts').getList(1, 6, {
        sort: '-created',
        expand: 'creator'
    })
    let posts: Post[] = []

    items.forEach(async (element)=> {
        let post = element as unknown as Post
        post.creatorExtend = element.expand.creator as unknown as User
        posts.push(post)
    })

    return {
        posts
    }
}