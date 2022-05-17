import AppRouter from "./routers/AppRouter";
import { CartProvider } from "./context/Cart";

function App() {
  return (
    <>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </>
  );
}

export default App;
