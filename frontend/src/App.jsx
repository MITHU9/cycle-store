import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewArrivals from "./pages/shared/NewArrivals";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl font-bold text-center mt-8">Hero!</h1>
      <NewArrivals />
      <Footer />
    </>
  );
}

export default App;
