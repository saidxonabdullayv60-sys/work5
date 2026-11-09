import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'

// Bu yer — "ko'prik". index.html dagi <div id="root"> ni topadi
// va ichiga <App /> komponentini chizadi.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
