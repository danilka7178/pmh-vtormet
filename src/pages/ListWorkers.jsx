import React from 'react';
import WorkersTable from "../components/WorkersTable";
import axios from "axios";

import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux";
import { setData } from "../store/workersList/actions";

import ModalAddWorker from "../components/modals/ModalAddWorker";

function ListWorkers({ handleOpenModal }) {

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
               division,
               driverLicence }) => {
               return (
                  firstName.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
                  lastName.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
                  middleName.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
                  personnelNumber.toString().toLocaleLowerCase().includes(inputSearchWorkerValue.toString().toLocaleLowerCase()) ||
                  employmentDate.toString().toLocaleLowerCase().includes(inputSearchWorkerValue.toString().toLocaleLowerCase()) ||
                  birthdayDate.toString().toLocaleLowerCase().includes(inputSearchWorkerValue.toString().toLocaleLowerCase()) ||
                  division.position.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
                  division.subDivision.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
                  driverLicence.toString().toLocaleLowerCase().includes(inputSearchWorkerValue.toString().toLocaleLowerCase())
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
            division,
            driverLicence }) => {
            return (
               firstName.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
               lastName.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
               middleName.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
               personnelNumber.toString().toLocaleLowerCase().includes(inputSearchWorkerValue.toString().toLocaleLowerCase()) ||
               employmentDate.toString().toLocaleLowerCase().includes(inputSearchWorkerValue.toString().toLocaleLowerCase()) ||
               birthdayDate.toString().toLocaleLowerCase().includes(inputSearchWorkerValue.toString().toLocaleLowerCase()) ||
               division.position.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
               division.subDivision.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase()) ||
               driverLicence.toString().toLocaleLowerCase().includes(inputSearchWorkerValue.toString().toLocaleLowerCase())
            )
         })
         dispatch(setData(filteredData));
      }
   }

   return (
      <div className="container">
         <div className="list-workers">
            <Button
               style={{ position: "absolute", left: "0", top: "0" }}
               component={Link} to="/"
               variant="contained"
               color="primary"
            >
               Назад
         </Button>
            <div className="list-workers__description">Список сотрудников ООО "ПМХ-ВТОРМЕТ"</div>
            <div className="list-workers__side">
               <button
                  className="list-workers__btn"
                  onClick={() => handleOpenModal("visibleModalAddWorker")}
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