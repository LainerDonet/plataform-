import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PaginatedTableAction } from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaginatedTableAction />
  </StrictMode>,
)
