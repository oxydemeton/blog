import { pb } from '$lib/pocketbase.js'

export async function load({cookies}) {
    const usr = cookies.get('user')
    if (usr) {
        pb.authStore.loadFromCookie(usr)
    }
}