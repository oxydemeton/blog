import PocketBase from "pocketbase"
import { writable } from "svelte/store"
import type { User } from "./DbInterfaces";

export const pb = new PocketBase('https://blog.mabla.name/pb');
const genCurrentUser = () => {
    if (pb.authStore.model) pb.collection('users').getOne(pb.authStore.model.id, {expand: 'comments(creator).post'}).then((v)=> {
        currentUser.set(v as unknown as User)
        console.log(v);
    })
    return undefined;
}
export const currentUser = writable<User | undefined>(genCurrentUser())
pb.authStore.onChange(async auth=> {
    if (!pb.authStore.isValid) {
        return;
    }
    if (pb.authStore.model) {
        const usr = await pb.collection('users').getOne(pb.authStore.model.id, {expand: 'comments(creator).post'}) as unknown as User
       currentUser.set(usr);
       console.log(usr);
       
    }
})