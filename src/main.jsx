/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { DarkModeContextProvider } from "./context/darkModeContext.jsx"
import axios from "axios"
import { Provider } from "react-redux"
import { persistor, store } from "./Redux/index.js"

import { PersistGate } from "redux-persist/integration/react"

axios.defaults.baseURL = "http://localhost:8000/api"

// axios.defaults.baseURL = "https://tutor4u.vercel.app/api"

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
)
