import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Layout from './components/Layout/Layout';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Shop />,
        },
        {
          path: '/shop',
          element: <Shop />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/inventory',
          element: <Inventory />
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
