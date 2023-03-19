import {pb} from "$lib/pocketbase"
import {loadPostAuthor} from "$lib/DbUtil"
import type { Post, User } from "$lib/DbInterfaces";
import { error } from "@sveltejs/kit";
export async function load({params}) {
    const user = await pb.collection('users').getOne(params.id).catch(()=> {
        throw error(404, {
            message: 'User not found'
          });
    });
    return {
        user: user as unknown as User
    }
}