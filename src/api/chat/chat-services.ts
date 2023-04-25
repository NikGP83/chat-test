import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ChatMessage, PostFormMessage } from '../../types/types';
import { appUrls } from '../../const/const';


export const chatApi = createApi({
  reducerPath: 'chatApi',
  tagTypes: ['Messages'],
  baseQuery: fetchBaseQuery({
    baseUrl: appUrls.baseUrl,
  }),
  endpoints: (build) => ({
    getSidebarDialogMsgData: build.query<ChatMessage[], string>({
      query: (url) => ({ url: url, method: 'get' }),
    }),
    getChatData: build.query<ChatMessage[], string>({
      query: (id) => ({ url: `/chat?dialog=${id}`, method: 'get' }),
      providesTags: (result) => ['Messages'],
    }),
    addMessage: build.mutation<PostFormMessage, PostFormMessage>({
      query: (body) => ({
        url: appUrls.userChatMessage,
        method: 'POST',
        body,
      }),

      invalidatesTags: ['Messages'],
    }),
  }),
});

export const {
  useGetChatDataQuery,
  useGetSidebarDialogMsgDataQuery,
  useAddMessageMutation,
} = chatApi;
