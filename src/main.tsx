import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from './page'   // Import your new component
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
)
