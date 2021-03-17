import React from "react";
import HomePage from "./pages/HomePage";
import ListWorkers from "./pages/ListWorkers";
import ListTechniques from "./pages/ListTechniques.jsx";
import ListShifts from "./pages/ListShifts";
import ListShift from "./pages/ListShift";
import PageNotFound from "./pages/PageNotFound";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "./store/pagesList/actions";
import { openModal } from "./store/modals/actions";


function App() {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.pagesListVault.currentPage);

  const handleClickButtonGoBack = (page) => {
    if (page) {
      dispatch(setCurrentPage(page))
    } else {
      dispatch(setCurrentPage(""))
    }
  }
  const handleOpenModal = (modal) => {
    dispatch(openModal(modal));
  }

  return (
    <div className="App">
      {!currentPage ? <HomePage />
        : currentPage === "ListWorkers" ? <ListWorkers
          handleClickButtonGoBack={handleClickButtonGoBack}
          handleOpenModal={handleOpenModal} />
          : currentPage === "ListTechniques" ? <ListTechniques
            handleClickButtonGoBack={handleClickButtonGoBack}
            handleOpenModal={handleOpenModal} />
            : currentPage === "ListShifts" ? <ListShifts
              handleClickButtonGoBack={handleClickButtonGoBack}
              handleOpenModal={handleOpenModal}
            />
              : currentPage === "ListShift" ? <ListShift
                handleClickButtonGoBack={handleClickButtonGoBack}
                handleOpenModal={handleOpenModal}
              />
                : <PageNotFound />}
    </div>
  );
}

export default App;
