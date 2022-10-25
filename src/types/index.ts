export interface AppState {
    posts: Post[]
    dialogVisible: boolean;
    modificatorValue: string;
    isPostsLoading: boolean;
}

export interface PostFormProps {
    newPost: NewPost
}

export type NewPost = Omit<Post, 'id'>


export interface Post {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}