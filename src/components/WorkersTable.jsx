import React from 'react';
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setData } from "../store/workersList/actions";

const columns = [
   { field: 'personnelNumber', headerName: 'Табельный №', width: 170 },
   { field: 'lastName', headerName: 'Фамилия', width: 130 },
   { field: 'firstName', headerName: 'Имя', width: 130 },
   { field: 'middleName', headerName: 'Отчество', width: 130 },
   { field: 'birthdayDate', headerName: 'Дата рождения', type: 'date', width: 210, },
   { field: 'subDivision', headerName: 'Подразделение', width: 250 },
   { field: 'position', headerName: 'Должность', width: 150 },
   { field: 'employmentDate', headerName: 'Дата приема на работу', type: 'date', width: 210, },
   { field: 'changeOrDelete', headerName: 'Изменение', width: 50, },
];


function WorkersTable() {
   const dispatch = useDispatch();

   const getData = async () => {
      const { data } = await axios.get("https://6024f2ad36244d001797b2c7.mockapi.io/Workers");
      dispatch(setData(data));
   }

   React.useEffect(() => {
      getData();
      // eslint-disable-next-line
   }, []);

   const data = useSelector(state => state.workersListVault.workersList);

   const clickRemoveWorker = (e) => {
      console.log(`Клик по ремуву id: ${e.target.id}`)
   }
   const clickChangeWorker = (e) => {
      console.log(`Клик по изменению id: ${e.target.id}`)
   }

   return (
      <div className="table-workers">
         {data ? (<table className="table-workers__workers-table workers-table">
            <thead>
               <tr className="workers-table__header">
                  {columns.map(({ headerName }) => {
                     return (
                        <th
                           key={headerName}
                           className="workers-table__column-title"
                        >
                           {headerName}
                        </th>
                     )
                  })}
               </tr>
            </thead>
            <tbody>
               {data.map(({ id, firstName,
                  lastName, middleName,
                  birthdayDate, personnelNumber,
                  division, employmentDate }) => {
                  return (
                     <tr key={`${id}+${firstName}`}><td>{personnelNumber}</td><td>{lastName}</td>
                        <td>{firstName}</td><td>{middleName}</td>
                        <td>{birthdayDate}</td><td>{division.subDivision}</td>
                        <td>{division.position}</td>
                        <td>{employmentDate}</td>
                        <td>
                           <button
                              onClick={clickChangeWorker}
                              className="worker-change" id={id}
                           >
                              --
                           </button>
                           <button
                              onClick={clickRemoveWorker}
                              className="worker-remove" id={id}
                           >
                              X
                           </button>
                        </td>
                     </tr>
                  )
               })}
            </tbody>
         </table>) :
            <h4>Подгружаю список сотрудников</h4>}
      </div>
   );
}

export default WorkersTable;