import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import { ShoppingCartProvider } from './context/ShoppingCartContext.jsx';
import { WishListProvider } from './context/WishListContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <ShoppingCartProvider>
        <WishListProvider>
          <AuthProvider>
           <App />
          </AuthProvider>
        </WishListProvider>
      </ShoppingCartProvider>
    </ProductProvider>
  </StrictMode>,
)