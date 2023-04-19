
export interface User {
  id: string;
  name: string;
  surname: string;
  avatar: string;
  you: boolean;
}

export interface ChatMessage {
          id: string;
          created_at: number;
          user: User;
          message: string;
          is_new: boolean;
}

export interface PostFormMessage {
  id: string | undefined;
  created_at: number;
  message: string;
  you: boolean;
}