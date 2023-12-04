import { configureStore, combineReducers } from "@reduxjs/toolkit"
// import { reducer } from "./slice";

import loginSlice from "./loginslice"
import storage from "redux-persist/lib/storage/session"
import { persistReducer, persistStore } from "redux-persist"
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import { thunk } from "redux-thunk"

const rootpersistConfig = {
  key: "root",
  version: 1,
  storage,
  stateReconciler: autoMergeLevel2,
}
const adminpersistConfig = {
  key: "rootadmin",
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  loginadmin: persistReducer(adminpersistConfig, loginSlice),
})
const persistedReducer = persistReducer(rootpersistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [thunk],
})
export const persistor = persistStore(store)
