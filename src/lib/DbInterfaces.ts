export interface Post {
    id: string,
    created: string,
    updated: string,
    title: string,
    content: string,
    tags?: string
    creator: string
    creatorExtend?: User 
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
}

export interface Comment {
    id: string,
    created: string,
    updated: string,
    title: string,
    content: string,
    extended: {
        post?: Post,
        creator?: User
    }
}