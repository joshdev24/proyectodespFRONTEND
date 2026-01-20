import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/outfit'; // Defaults to weight 400
import '@fontsource/outfit/600.css'; // Semi-bold
import '@fontsource/outfit/700.css'; // Bold
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
  </BrowserRouter>
)
