import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { chatApi } from "../api/chat/chat-serivces";

const rootReducer = combineReducers({
    [chatApi.reducerPath]: chatApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(chatApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;