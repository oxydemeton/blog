export interface Post {
    id: string,
    created: string,
    updated: string,
    title: string,
    content: string,
    tags?: string

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