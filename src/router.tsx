import BaseLayout from './components/BaseLayout';
import SpellDetail from 'pages/detail';
import PortalPage from 'pages/spells';
import { RouteObject } from 'react-router-dom';
import { createBrowserRouter, Link, Navigate } from 'react-router-dom';
import Wishlist from 'pages/wishlist';
const routes = createBrowserRouter([
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="spells" replace />,
      },
      {
        path: 'spells',
        children: [
          {
            path: '',
            element: <PortalPage />,
          },
          {
            path: ':path',
            element: <SpellDetail />,
          },
        ],
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
      {
        path: '*',
        element: <div></div>,
      },
    ],
  },
]);

export default routes;
