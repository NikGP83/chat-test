export interface ChatMessage {
    response: [
        {
          id: string,
          created_at: number,
          title: string,
          avatar: string,
          private: true,
          last_message: {
            created_at: number,
            user_id: string,
            user_name: string,
            user_surname: string,
            you: true,
            message: string,
          },
          users: [
            {
              id: string,
              name: string,
              surname: string,
              avatar: string,
            }
          ],
          count_unread: number,
        }
      ]
}