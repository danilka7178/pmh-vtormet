import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

import ModalAddWorker from "../components/modals/ModalAddWorker";
import ModalDialogTechniques from "../components/modals/ModalDialogTechniques";
import { useDispatch, useSelector } from "react-redux";
import { getTechniquesList, changeVisibleModal, setCurrentTechnique } from "../store/techniquesList/actions";

const columns = [
   { field: 'id', headerName: '№ п/п', width: 150 },
   { field: 'stateNumber', headerName: 'Гос. номер', width: 150 },
   { field: 'brand', headerName: 'Марка', width: 150 },
   {
      field: 'inventoryNumber',
      headerName: 'Инвентарный/гаражный номер',
      type: 'number',
      width: 150,
   },
   {
      field: 'fuel',
      headerName: 'Топливо',
      // description: 'This column has a value getter and is not sortable.',
      width: 150,
   },
];

function ListTechniques({ handleClickButtonGoBack, openModalAddWorker }) {
   const dispatch = useDispatch();
   const data = useSelector(state => state.techniquesListVault.techniquesList);

   React.useEffect(() => {
      dispatch(getTechniquesList())
      // eslint-disable-next-line
   }, [])


   const handleClickRow = (data) => {
      dispatch(setCurrentTechnique(data.row))
      dispatch(changeVisibleModal("actions"))
   }

   return (
      <div className="list-techniques">
         <div className="list-techniques__container">
            <button
               className="go-home-page-button"
               onClick={handleClickButtonGoBack}
            >
               Назад
            </button>
            <div className="list-workers__description list-techniques__description">Список техники ООО "ПМХ-ВТОРМЕТ"</div>
            <div className="list-workers__side list-techniques__side">
               <button
                  className="list-workers__btn list-techniques__btn"
                  onClick={openModalAddWorker}
               >
                  Добавить технику
               </button>
            </div>
            <div className="list-techniques__table-container">
               {!data ? (<h3>Подгружаю список техники</h3>) :
                  (<div
                     className="list-techniques__table"
                     style={{ height: 400, width: '90%', marginLeft: "auto", marginRight: "auto" }}>
                     <DataGrid
                        rows={data ? data : null}
                        columns={columns}
                        pageSize={5}
                        onRowClick={(data) => handleClickRow(data)} />
                  </div>)}
            </div>
            <div className="list-workers__summary-info list-techniques__summary-info">
               {"Общее кол-во техники: "}
               {data ? data.length : "0"}
            </div>
         </div>
         <ModalAddWorker />
         <ModalDialogTechniques />
      </div>
   );
}

export default ListTechniques;