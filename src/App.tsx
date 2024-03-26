import { PropertyProvider } from './context/PropertyContext';
import Home from './pages/Home';

function App() {
  return (
    <PropertyProvider>
      <Home />
    </PropertyProvider>
  );
}

export default App;
