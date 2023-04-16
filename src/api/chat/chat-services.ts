import { createApi } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';
import { ChatMessage } from '../../types/types';
import { appUrls } from '../../const/const';

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const chatApi = createApi({
  reducerPath: 'chatApi',
  tagTypes: ['Messages'],
  baseQuery: axiosBaseQuery({
    baseUrl: appUrls.baseUrl,
  }),
  endpoints: (build) => ({
    getSidebarDialogMsgData: build.query<ChatMessage[], string>({
      query: (url) => ({ url: url, method: 'get' }),
    }),
    getChatData: build.query<ChatMessage[], string>({
      query: (id) => ({ url: `/chat?id=${id}`, method: 'get' }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Messages' as const, id })),
              { type: 'Messages', id: 'LIST' },
            ]
          : [{ type: 'Messages', id: 'LIST' }],
    }),
    addMessage: build.mutation<ChatMessage, object>({
      query: (body) => ({ url: `/chat}`, method: 'POST', body }),
      invalidatesTags: [{ type: 'Messages', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetChatDataQuery,
  useGetSidebarDialogMsgDataQuery,
  useAddMessageMutation,
} = chatApi;
