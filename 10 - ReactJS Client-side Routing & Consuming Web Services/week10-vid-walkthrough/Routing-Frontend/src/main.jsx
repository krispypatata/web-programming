import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage.jsx';
import RoutingInfo from './pages/RoutingInfo.jsx';
import GameList from './pages/GameList.jsx';
import SelectedGame from './pages/SelectedGame.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <ErrorPage/>},
  { path: '/routing-info', element: <RoutingInfo /> },
  { path: '/games', element: <GameList />},
  { path: '/games/:id', element: <SelectedGame />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
