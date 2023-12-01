import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkModeContextProvider } from './context/darkModeContext.jsx'
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

// axios.defaults.baseURL = "https://tutor4u.vercel.app/api";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
)
