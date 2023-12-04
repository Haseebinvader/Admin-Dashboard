import { createSlice } from "@reduxjs/toolkit"

const loginSlice = createSlice({
  name: "loginadmin",
  initialState: {
    data: {},

    isAuthorized: false,
  },
  reducers: {
    funcisAuthorized: (state, action) => {
      state.isAuthorized = action.payload
    },
  },
})
export const { funcisAuthorized } = loginSlice.actions

export default loginSlice.reducer
