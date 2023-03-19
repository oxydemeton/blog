import {pb} from "../lib/pocketbase"
export async function load() {
    const {items: [latest_post]} = await pb.collection('posts').getList(1, 1, {
        sort: '-created'
    })
    console.log(latest_post);
    
    return {
        latest_post
    }
}