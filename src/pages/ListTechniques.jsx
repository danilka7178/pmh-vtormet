import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"

import ModalTechniquesAdd from "../components/modals/ModalTechniqueAdd";
import ModalDialogTechniques from "../components/modals/ModalDialogTechniques";
import { useDispatch, useSelector } from "react-redux";
import { getTechniquesList, setCurrentTechnique } from "../store/techniquesList/actions";
import { openModal } from "../store/modals/actions";

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

function ListTechniques({ handleOpenModal }) {
   const dispatch = useDispatch();
   const data = useSelector(state => state.techniquesListVault.techniquesList);

   React.useEffect(() => {
      dispatch(getTechniquesList())
      // eslint-disable-next-line
   }, [])


   const handleClickRow = (data) => {
      dispatch(setCurrentTechnique(data.row))
      dispatch(openModal("visibleModalActionsTechniques"))
   }

   return (
      <div className="list-techniques">
         <div className="list-techniques__container">
            <Button
               component={Link} to="/"
               variant="contained"
               color="primary"
            >
               Назад
         </Button>
            <div className="list-workers__description list-techniques__description">Список техники ООО "ПМХ-ВТОРМЕТ"</div>
            <div className="list-workers__side list-techniques__side">
               <button
                  className="list-workers__btn list-techniques__btn"
                  onClick={() => handleOpenModal("visibleModalAddTechnique")}
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
         <ModalDialogTechniques />
         <ModalTechniquesAdd />
      </div>
   );
}

export default ListTechniques;