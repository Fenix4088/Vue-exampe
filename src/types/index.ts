export interface AppState {
    posts: Post[]
    title: string;
    body: string;
}

interface Post {
    id: number;
    title: string;
    body: string
}