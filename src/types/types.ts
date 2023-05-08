export interface User {
  id: string;
  name: string;
  surname: string;
  avatar: string;
  you: boolean;
}

export interface ChatMessage {
  created_at: number;
  id: string;
  is_new: boolean;
  message: string;
  user: User;
}

export interface PostFormMessage {
  id?: string | undefined;
  dialog: string | undefined;
  created_at: number;
  user: {
    you: boolean;
  };
  message: string;
}
