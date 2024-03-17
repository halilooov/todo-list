import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { App } from './App'

import './global.css'

const rootNode = document.getElementById('root')

if (!rootNode) {
  throw new Error('No such root node exist!')
}

const root = createRoot(rootNode)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
