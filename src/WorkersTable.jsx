import React from 'react';
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setData } from "./store/workersList/actions";

const columns = [
   { field: 'personnelNumber', headerName: 'Табельный №', width: 170 },
   { field: 'firstName', headerName: 'Имя', width: 130 },
   { field: 'lastName', headerName: 'Фамилия', width: 130 },
   { field: 'middleName', headerName: 'Отчество', width: 130 },
   { field: 'birthdayDate', headerName: 'Дата рождения', type: 'date', width: 210, },
   { field: 'subDivision', headerName: 'Подразделение', width: 250 },
   { field: 'position', headerName: 'Должность', width: 150 },
   {
      field: 'age',
      headerName: 'Возраст',
      type: 'number',
      width: 100,
      valueGetter: (params) =>
         `${Date.now()}`
   },
   { field: 'employmentDate', headerName: 'Дата приема на работу', type: 'date', width: 210, },
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

   const data = useSelector(state => state.workersListVault.workersList)
   return (
      <div className="container">
         <input className="workers-table__search" type="text" placeholder="Начните вводить имя сотрудника" />
         {data ? (<table className="workers-table">
            <caption className="workers-table__description">Список сотрудников ООО "ПМХ-ВТОРМЕТ"</caption>
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
                     <tr key={`${id}+${firstName}`}><td>{personnelNumber}</td><td>{firstName}</td>
                        <td>{lastName}</td><td>{middleName}</td>
                        <td>{birthdayDate}</td><td>{division.subDivision}</td>
                        <td>{division.position}</td><td>{((new Date().getTime() - new Date(birthdayDate)) / (24 * 3600 * 365.25 * 1000)) | 0}</td>
                        <td>{employmentDate}</td></tr>
                  )
               })}
            </tbody>
         </table>) :
            <h4>Подгружаю список сотрудников</h4>}
      </div>
   );
}

export default WorkersTable;