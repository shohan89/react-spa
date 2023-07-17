import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Layout from './components/Layout/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />
    }
  ]);
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
