import { appUrls } from './../../const/const';
import { createApi  } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export const chatApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: axiosBaseQuery({
        baseUrl: appUrls.baseUrl,
    }),
    endpoints: (build) => ({
        getSidebarDialogMsgData: build.query({
            query: (url) => ({url: url, method: 'get'}),
        }),
        getChatData: build.query({
            query: (url) => ({url: url, method: 'get'}),
        })
    })
})

export const {useGetChatDataQuery, useGetSidebarDialogMsgDataQuery} = chatApi;