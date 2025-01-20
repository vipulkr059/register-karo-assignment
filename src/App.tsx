import { Footer } from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
