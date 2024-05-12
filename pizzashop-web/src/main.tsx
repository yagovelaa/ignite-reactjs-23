import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { enebleMSW } from './api/mocks/index.ts'
import { App } from './app.tsx'

enebleMSW().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
