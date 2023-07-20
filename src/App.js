import Loader from "./components/Loader";
// react router dom
import { Route, Routes } from "react-router-dom";
// pages
import Home from "./pages/Home";

import { useState, useEffect,Suspense } from "react";


function App() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader isLoad={isLoading} />
      ) : (
        <Suspense
          fallback={
            <>
              <Loader />
            </>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      )}

    </div>
  );
}

export default App;
