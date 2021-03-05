import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../store/workersList/actions";

function ButtonSort({ id }) {
   const workersList = useSelector(state => state.workersListVault.workersList);
   const dispatch = useDispatch();
   const [buttonClass, setButtonClass] = React.useState("button-sort");
   const [prevWorkersList, setPrevWorkersList] = React.useState([]);


   const transformationDate = (date) => {
      if (date) {
         const someTryMassive = [];
         const newMassive = date.replace(/\./g, "-").split("");

         someTryMassive.push(newMassive[6], newMassive[7], newMassive[8],
            newMassive[9], newMassive[5],
            newMassive[3], newMassive[4], newMassive[2],
            newMassive[0], newMassive[1])

         return (
            someTryMassive.join("")
         )
      }
   }

   //! Функция по нажатия на кнопку сортировки
   const handleClickOnButtonSort = async (e) => {

      //? Кнопка "Табельный №"
      //? -----------------------------------------------------
      if (e.target.id === "Табельный №") {
         if (e.target.className === "button-sort") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (a.personnelNumber > b.personnelNumber) {
                  return 1
               } else if (a.personnelNumber < b.personnelNumber) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase`);
            setPrevWorkersList(workersList)
         } else if (e.target.className === "button-sort button-sort--increase") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (a.personnelNumber < b.personnelNumber) {
                  return 1
               } else if (a.personnelNumber > b.personnelNumber) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase-reverse`)
         } else {
            dispatch(setData(prevWorkersList));
            setButtonClass(`button-sort`)
         }
      }

      //? Кнопка "Фамилия"
      //? -------------------------------------------------
      else if (e.target.id === "Фамилия") {
         if (e.target.className === "button-sort") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (a.lastName > b.lastName) {
                  return 1
               } else if (a.lastName < b.lastName) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase`);
            setPrevWorkersList(workersList)
         } else if (e.target.className === "button-sort button-sort--increase") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (a.lastName < b.lastName) {
                  return 1
               } else if (a.lastName > b.lastName) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase-reverse`)
         } else {
            dispatch(setData(prevWorkersList));
            setButtonClass(`button-sort`)
         }
      }

      //? Кнопка "Имя"
      //? -------------------------------------------------
      else if (e.target.id === "Имя") {
         if (e.target.className === "button-sort") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (a.firstName > b.firstName) {
                  return 1
               } else if (a.firstName < b.firstName) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase`);
            setPrevWorkersList(workersList)
         } else if (e.target.className === "button-sort button-sort--increase") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (a.firstName < b.firstName) {
                  return 1
               } else if (a.firstName > b.firstName) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase-reverse`)
         } else {
            dispatch(setData(prevWorkersList));
            setButtonClass(`button-sort`)
         }
      }

      //? Кнопка "Отчество"
      //? -------------------------------------------------
      else if (e.target.id === "Отчество") {
         if (e.target.className === "button-sort") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (a.lastName > b.lastName) {
                  return 1
               } else if (a.lastName < b.lastName) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase`);
            setPrevWorkersList(workersList)
         } else if (e.target.className === "button-sort button-sort--increase") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (a.lastName < b.lastName) {
                  return 1
               } else if (a.lastName > b.lastName) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase-reverse`)
         } else {
            dispatch(setData(prevWorkersList));
            setButtonClass(`button-sort`)
         }
      }

      //? Кнопка "Дата рождения"
      //? -------------------------------------------------
      else if (e.target.id === "Дата рождения") {
         if (e.target.className === "button-sort") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (new Date(transformationDate(a.birthdayDate)) > new Date(transformationDate(b.birthdayDate))) {
                  return 1
               } else if (new Date(transformationDate(a.birthdayDate)) < new Date(transformationDate(b.birthdayDate))) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase`);
            setPrevWorkersList(workersList)
         } else if (e.target.className === "button-sort button-sort--increase") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (new Date(transformationDate(a.birthdayDate)) < new Date(transformationDate(b.birthdayDate))) {
                  return 1
               } else if (new Date(transformationDate(a.birthdayDate)) > new Date(transformationDate(b.birthdayDate))) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase-reverse`)
         } else {
            dispatch(setData(prevWorkersList));
            setButtonClass(`button-sort`)
         }
      }

      //? Кнопка "Подразделение"
      //? -------------------------------------------------
      else if (e.target.id === "Подразделение") {
         if (e.target.className === "button-sort") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (a.division.position > b.division.position) {
                  return 1
               } else if (a.division.position < b.division.position) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase`);
            setPrevWorkersList(workersList)
         } else if (e.target.className === "button-sort button-sort--increase") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (a.division.position < b.division.position) {
                  return 1
               } else if (a.division.position > b.division.position) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase-reverse`)
         } else {
            dispatch(setData(prevWorkersList));
            setButtonClass(`button-sort`)
         }
      }

      //? Кнопка "Должность"
      //? -------------------------------------------------
      else if (e.target.id === "Должность") {
         if (e.target.className === "button-sort") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (a.division.subDivision > b.division.subDivision) {
                  return 1
               } else if (a.division.subDivision < b.division.subDivision) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase`);
            setPrevWorkersList(workersList)
         } else if (e.target.className === "button-sort button-sort--increase") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (a.division.subDivision < b.division.subDivision) {
                  return 1
               } else if (a.division.subDivision > b.division.subDivision) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase-reverse`)
         } else {
            dispatch(setData(prevWorkersList));
            setButtonClass(`button-sort`)
         }
      }

      //? Кнопка "Дата приема на работу"
      //? -------------------------------------------------
      else if (e.target.id === "Дата приема на работу") {
         if (e.target.className === "button-sort") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (new Date(transformationDate(a.employmentDate)) > new Date(transformationDate(b.employmentDate))) {
                  return 1
               } else if (new Date(transformationDate(a.employmentDate)) < new Date(transformationDate(b.employmentDate))) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase`);
            setPrevWorkersList(workersList)
         } else if (e.target.className === "button-sort button-sort--increase") {
            const sortWorkersList = workersList.slice().sort((a, b) => {
               if (new Date(transformationDate(a.employmentDate)) < new Date(transformationDate(b.employmentDate))) {
                  return 1
               } else if (new Date(transformationDate(a.employmentDate)) > new Date(transformationDate(b.employmentDate))) {
                  return -1
               } else return 0
            });
            dispatch(setData(sortWorkersList));
            setButtonClass(`button-sort button-sort--increase-reverse`)
         } else {
            dispatch(setData(prevWorkersList));
            setButtonClass(`button-sort`)
         }
      }
   }


   return (
      <button
         id={id}
         className={buttonClass}
         onClick={handleClickOnButtonSort}
      >
      </button>
   )
}

export default ButtonSort;