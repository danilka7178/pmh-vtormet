import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListWorkers from "./pages/ListWorkers";
import ListTechniques from "./pages/ListTechniques.jsx";
import ListShifts from "./pages/ListShifts";
import ListShift from "./pages/ListShift";

import { useDispatch } from "react-redux";
import { setCurrentPage } from "./store/pagesList/actions";
import { openModal } from "./store/modals/actions";


function App() {
  const dispatch = useDispatch();

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

      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/workers">
        <ListWorkers
          handleClickButtonGoBack={handleClickButtonGoBack}
          handleOpenModal={handleOpenModal}
        />
      </Route>

      <Route exact path="/techniques">
        <ListTechniques
          handleClickButtonGoBack={handleClickButtonGoBack}
          handleOpenModal={handleOpenModal}
        />
      </Route>

      <Route exact path="/shifts">
        <ListShifts
          handleClickButtonGoBack={handleClickButtonGoBack}
          handleOpenModal={handleOpenModal}
        />
      </Route>

      <Route exact path="/current-shift">
        <ListShift
          handleOpenModal={handleOpenModal}
        />
      </Route>

    </div>
  );
}

export default App;
