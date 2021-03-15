import React from "react";
import HomePage from "./pages/HomePage";
import ListWorkers from "./pages/ListWorkers";
import ListTechniques from "./pages/ListTechniques.jsx";
import PageNotFound from "./pages/PageNotFound";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "./store/pagesList/actions";
import { openModal } from "./store/workersList/actions";


function App() {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.pagesListVault.currentPage);

  const handleClickButtonGoBack = () => {
    dispatch(setCurrentPage(""))
  }
  const openModalAddWorker = () => {
    dispatch(openModal("visibleModalAddWorker"));
  }

  return (
    <div className="App">
      {!currentPage ? <HomePage />
        : currentPage === "ListWorkers" ? <ListWorkers
          handleClickButtonGoBack={handleClickButtonGoBack}
          openModalAddWorker={openModalAddWorker} />
          : currentPage === "ListTechniques" ? <ListTechniques
            handleClickButtonGoBack={handleClickButtonGoBack}
            openModalAddWorker={openModalAddWorker} />
            : <PageNotFound />}
    </div>
  );
}

export default App;
