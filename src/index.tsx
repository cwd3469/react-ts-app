import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import React, { StrictMode } from 'react'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)
const app = (
    <StrictMode>
        <RecoilRoot>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </RecoilRoot>
    </StrictMode>
)

root.render(app)

reportWebVitals()
