import type { Post, User } from "./DbInterfaces";
import { pb } from "./pocketbase";

export async function loadPostAuthor(post: Post): Promise<User> {
    const record = await pb.collection('users').getOne(post.creator);
    return record as unknown as User
}