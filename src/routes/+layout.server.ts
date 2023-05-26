import { pb } from '$lib/pocketbase.js'

export async function load({cookies}) {
    const usr = cookies.get('user')
    console.log("User: " + usr);
    
    return {
        usr: usr
    }
}