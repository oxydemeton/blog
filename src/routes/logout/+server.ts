import { pb } from '$lib/pocketbase.js'

export function POST({cookies}) {
    cookies.delete('user')
    pb.authStore.clear()
    return new Response()
}