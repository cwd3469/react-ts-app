import { createRoot } from 'react-dom/client'

import { RecoilRoot } from 'recoil'
import React, { StrictMode } from 'react'
import reportWebVitals from './containers/reportWebVitals'
import App from './containers/App'
import './assets/css/index.css'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)
const app = (
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
)

root.render(app)

reportWebVitals()
