import { createSlice } from "@reduxjs/toolkit";
import { MAX_LIVE_CHATS } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            if (state.messages.length > MAX_LIVE_CHATS) {
                state.messages.splice(
                    0,
                    state.messages.length - MAX_LIVE_CHATS
                );
            }
            state.messages.push(action.payload);
        },
    },
});

export default chatSlice.reducer;
export const { addMessage } = chatSlice.actions;
