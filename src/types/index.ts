export interface AppState {
  posts: Post[];
  dialogVisible: boolean;
  modificatorValue: string;
  isPostsLoading: boolean;
  selectedSort: string;
  sortOptions: Option[];
}

export interface PostFormProps {
  newPost: NewPost;
}

export type NewPost = Pick<Post, 'body' | 'title'>;

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Option {
  value: string;
}
