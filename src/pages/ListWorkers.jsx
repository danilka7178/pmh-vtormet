import React from 'react';
import WorkersTable from "../components/WorkersTable";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setData, openModal } from "../store/workersList/actions";

import ModalAddWorker from "../components/modals/ModalAddWorker";


function ListWorkers() {

   const data = useSelector(state => state.workersListVault.workersList);
   const [inputSearchWorkerValue, setInputSearchWorkerValue] = React.useState("");
   const dispatch = useDispatch();

   const findWorker = (e) => {
      if (inputSearchWorkerValue === "" && (e.type === "click" || e.code === "Enter" || e.code === "Backspace")) {
         const getData = async () => {
            const { data } = await axios.get("https://6024f2ad36244d001797b2c7.mockapi.io/Workers");
            dispatch(setData(data));
         };
         getData();
      } else if (e.code === "Backspace") {
         const getData = async () => {
            const { data } = await axios.get("https://6024f2ad36244d001797b2c7.mockapi.io/Workers");
            const filteredData = data.filter(({
               firstName,
               lastName,
               middleName,
               personnelNumber,
               employmentDate,
               birthdayDate,
               division }) => {
               return (
                  firstName.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
                  lastName.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
                  middleName.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
                  personnelNumber.toString().toLocaleLowerCase().includes(inputSearchWorkerValue.toString().toLocaleLowerCase()) ||
                  employmentDate.toString().toLocaleLowerCase().includes(inputSearchWorkerValue.toString().toLocaleLowerCase()) ||
                  birthdayDate.toString().toLocaleLowerCase().includes(inputSearchWorkerValue.toString().toLocaleLowerCase()) ||
                  division.position.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
                  division.subDivision.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase())
               )
            })
            dispatch(setData(filteredData));
         };
         getData();
      }
      else {
         const filteredData = data.filter(({
            firstName,
            lastName,
            middleName,
            personnelNumber,
            employmentDate,
            birthdayDate,
            division }) => {
            return (
               firstName.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
               lastName.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
               middleName.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
               personnelNumber.toString().toLocaleLowerCase().includes(inputSearchWorkerValue.toString().toLocaleLowerCase()) ||
               employmentDate.toString().toLocaleLowerCase().includes(inputSearchWorkerValue.toString().toLocaleLowerCase()) ||
               birthdayDate.toString().toLocaleLowerCase().includes(inputSearchWorkerValue.toString().toLocaleLowerCase()) ||
               division.position.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
               division.subDivision.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase())
            )
         })
         dispatch(setData(filteredData));
      }
   }

   const openModalAddWorker = () => {
      dispatch(openModal("visibleModalAddWorker"));
   }

   return (
      <div className="container">
         <div className="list-workers">
            <div className="list-workers__description">Список сотрудников ООО "ПМХ-ВТОРМЕТ"</div>
            <div className="list-workers__side">
               <button
                  className="list-workers__btn"
                  onClick={openModalAddWorker}
               >
                  Добавить сотрудника
               </button>
               <div>
                  <input
                     className="list-workers__search"
                     type="text"
                     placeholder="Введите искомое"
                     value={inputSearchWorkerValue}
                     onChange={(e) => setInputSearchWorkerValue(e.target.value)}
                     onKeyUp={findWorker}
                  />
                  <button
                     className="list-workers__btn list-workers__btn--search"
                     onClick={findWorker}
                  >
                     Поиск
               </button>
               </div>
            </div>
            <WorkersTable />
            <div className="list-workers__summary-info">
               {inputSearchWorkerValue === "" ? "Общее кол-во работников: " : "Количество совпадений: "}
               {data ? data.length : "0"}
            </div>
         </div>
         <ModalAddWorker />
      </div>
   );
}

export default ListWorkers;