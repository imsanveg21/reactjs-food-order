import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import CART from './components/Cart/Cart';

function App() {
  return (
    <CartProvider>
      <CART />
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
