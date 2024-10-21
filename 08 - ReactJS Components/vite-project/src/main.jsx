import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  // <StrictMode> element doesn't render anything visible on your app. It runs the checks and provies warning in the development mode

  // <App /> - React component that will return all of the necessary elements to complete the entire front-end application

  //  <> - Fragments in React
)
