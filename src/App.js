import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop/Shop';
import Layout from './components/Layout/Layout';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import { productAndCartLoader } from './loader/productAndCartLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/shop',
          loader: () => fetch( 'products.json' ),
          element: <Shop />,
        },
        {
          path: '/orders',
          loader: productAndCartLoader,
          element: <Orders />,
        },
        {
          path: '/inventory',
          element: <PrivateRoute><Inventory /></PrivateRoute>
        },
        {
          path: '/shipping',
          element: <PrivateRoute><Shipping /></PrivateRoute>
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <SignUp />
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
