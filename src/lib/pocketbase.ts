import PocketBase from "pocketbase"
import { writable } from "svelte/store"

export const pb = new PocketBase('http://88.99.125.155/pb');
export const currentUser = writable(pb.authStore.model)
pb.authStore.onChange(auth=> {    
    currentUser.set(pb.authStore.model) 
})
