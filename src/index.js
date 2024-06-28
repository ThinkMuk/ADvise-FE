import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { RouterProvider } from 'react-router-dom';
import AuctionLists from './pages/AuctionLists';
import AuctionDetail from './pages/AuctionDetail';
import VisitHistory from './pages/VisitHistory';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <AuctionLists /> },
      { path: 'AuctionLists', element: <AuctionLists /> },
      { path: 'AuctionDetail/:auctionId', element: <AuctionDetail /> },
      { path: 'history', element: <VisitHistory /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
