import {pb} from "$lib/pocketbase"
import { error } from "@sveltejs/kit";
import type { Post } from "$lib/DbInterfaces";

export async function load({params}) {
    const page = params.page === undefined ? 1: parseInt(params.page)
    if (isNaN(page)) throw error(400, {
        message: 'Invalid Page number.'
    });
    

    const posts = await (await pb.collection('posts').getList(page, 10)).items
    //post.creatorExtend = post.expand.creator
    //post.creatorExtend = await loadPostAuthor(post as unknown as Post)

    return {
        posts: posts as unknown as Post[],
        page
    }
}