import { Outlet, useNavigation } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const navigation = useNavigation();
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let timer;
    if (navigation.state === "loading") {
      setShowSpinner(true);
    } else {
      timer = setTimeout(() => setShowSpinner(false), 200);
    }

    return () => clearTimeout(timer);
  }, [navigation.state]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 relative">
        {showSpinner && <Spinner />}
        <Outlet />
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </div>
  );
}

export default App;
