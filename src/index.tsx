import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import App from './App';
import RatePage from './pages/RatePage';
import TrendPage from './pages/TrendPage';
import ErrorPage from './pages/ErrorPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const trendPageData = new Map<string, string[]>([
    ["Most worthy", ["Getting a dog", "Starting a side project"]],
    ["Least worthy", ["NFT"]],
    ["People want to know", ["Competitive Pokemon", "Gardening"]]
  ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <TrendPage data={trendPageData}/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "rate/:title",
    element: <RatePage title=""/>,
  },
]);


root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
