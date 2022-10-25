export interface AppState {
    posts: Post[]
}

export interface Post {
    id: number;
    title: string;
    body: string
}


export interface PostFormProps {
    newPost: NewPost
}

export type NewPost = Omit<Post, 'id'>