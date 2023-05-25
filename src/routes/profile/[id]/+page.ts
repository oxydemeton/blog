import {pb} from "$lib/pocketbase"
import type { User } from "$lib/DbInterfaces";
import { error } from "@sveltejs/kit";
export async function load({params}) {
    const user = await pb.collection('users').getOne(params.id, {expand: 'comments(creator).post,posts(creator)'}).catch(()=> {
        throw error(404, {
            message: 'User not found'
          });
    });    
    
    return {
        user: user as unknown as User
    }
}