import React, { useEffect, useState } from "react";
import Preloader from "./_components/Loading/Preloader";
import AllPage from "./AllPage";

function App() {
  const [isPreload, setPreaload] = useState(true);

  useEffect(() => {
    const handleScroll = () => setPreaload(false);
    const timeout = setTimeout(() => setPreaload(false), 3000);

    if (isPreload) {
      window.addEventListener("scroll", handleScroll, { once: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [isPreload]);

  return <>{isPreload ? <Preloader /> : <AllPage />}</>;
}

export default App;
