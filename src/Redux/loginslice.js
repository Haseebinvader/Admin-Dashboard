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
    funcisAuthdata: (state, action) => {
      state.data = action.payload
    },
  },
})
export const { funcisAuthorized, funcisAuthdata } = loginSlice.actions

export default loginSlice.reducer
