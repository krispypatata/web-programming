import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GameList from './pages/GameList.jsx';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import RoutingInfo from './pages/RoutingInfo.jsx';
import SelectedGame from './pages/SelectedGame.jsx';
// Import the necessary routing components for the application.

const router = createBrowserRouter([
  /****
   * Indicate the path and add the element(s) created from the pages.
   */  
  { path: '/', element: <App /> },
  { path: '/games', element: <GameList />},
  { path: '/routing-info', element: <RoutingInfo /> },
  { path: '/games/:id', element: <SelectedGame /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* Replace the App component and set up routing in your app using RouterProvider component */}
  </StrictMode>,
)
