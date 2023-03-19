import {pb} from "$lib/pocketbase"
import {loadPostAuthor} from "$lib/DbUtil"
import type { Post, User } from "$lib/DbInterfaces";
export async function load({params}) {
    const user = await pb.collection('users').getOne(params.id);
    return {
        user: user as unknown as User
    }
}