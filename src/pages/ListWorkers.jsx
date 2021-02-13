import React from 'react';
import WorkersTable from "../components/WorkersTable";

import { useSelector } from "react-redux";

function ListWorkers() {

   const data = useSelector(state => state.workersListVault.workersList);
   const [inputSearchWorkerValue, setInputSearchWorkerValue] = React.useState("");

   const findWorker = () => {
      console.log(data.filter(({ firstName }) => {
         return (
            firstName.toLocaleLowerCase().includes(inputSearchWorkerValue.toLocaleLowerCase())
         )
      }))
   }

   return (
      <div className="container">
         <div className="list-workers">
            <div className="list-workers__description">Список сотрудников ООО "ПМХ-ВТОРМЕТ"</div>
            <div className="list-workers__side">
               <button className="list-workers__btn">Добавить сотрудника</button>
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
            <div className="list-workers__summary-info">Общее кол-во работников: {data ? data.length : 0}</div>
         </div>
      </div>
   );
}

export default ListWorkers;