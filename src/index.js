import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.scss"
import { CartProvider } from 'react-use-cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <CartProvider>
        <App />
      </CartProvider>
  </BrowserRouter>
);