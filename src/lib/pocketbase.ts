import PocketBase from "pocketbase"
import { writable } from "svelte/store"

export const pb = new PocketBase('https://blog.mabla.name/pb');
export const currentUser = writable(pb.authStore.model)
pb.authStore.onChange(async auth=> {
    if (!pb.authStore.isValid) {
        return;
    }
    if (pb.authStore.model) {
       currentUser.set(await pb.collection('users').getOne(pb.authStore.model.id));
    }
})

export function expendUserComments()