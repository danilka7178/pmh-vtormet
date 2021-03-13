import React from "react";
import HomePage from "./pages/HomePage";
import ListWorkers from "./pages/ListWorkers";
import ListTechniques from "./pages/ListTechniques.jsx";
import PageNotFound from "./pages/PageNotFound";

import { useSelector } from "react-redux";

function App() {

  const currentPage = useSelector(state => state.pagesListVault.currentPage);

  return (
    <div className="App">
      {!currentPage ? <HomePage />
        : currentPage === "ListWorkers" ? <ListWorkers />
          : currentPage === "ListTechniques" ? <ListTechniques />
            : <PageNotFound />}
    </div>
  );
}

export default App;
