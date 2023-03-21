export interface Post {
    id: string,
    created: string,
    updated: string,
    title: string,
    content: string,
    tags?: string
    creator: string
    creatorExtend?: User
    expand: {
        creator: User[]
        'comments(post)': Comment[]
    }
}

export interface User {
    id: string,
    created: string,
    updated: string,
    username: string,
    email?: string,
    emailVisibility: boolean
    verified?: string
    editor?: boolean
    expand: {
        posts: Post[],
        'comments(user)': Comment[]
    }
}

export interface Comment {
    id: string,
    created: string,
    updated: string,
    title: string,
    content: string,
    expand: {
        post: Post,
        creator: User
    }
}