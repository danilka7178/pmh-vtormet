import Button from '@material-ui/core/Button';
import { useSelector } from "react-redux";

import ShiftGrid from "../components/ShiftGrid";

function ListShift({ handleClickButtonGoBack }) {
   const currentShift = useSelector(state => state.shiftsVault.currentShift);

   const handleAddList = () => {
      console.log("Логика добавления п/л")
   }

   const handlePrintList = () => {
      console.log("Не гони, сделай весь фронт")
   }

   return (
      <div className="list-shift">
         <h3 className="list-shift__description">Выбранная смена: {currentShift.shiftName}, всего п/л: {currentShift.shift.length}</h3>
         <div className="list-shift__button-go-back">
            <Button
               variant="contained"
               color="primary"
               onClick={() => { handleClickButtonGoBack("ListShifts") }}
            >
               Назад
         </Button>
         </div>
         <div className="list-shift__buttons">
            <div className="list-shift__button-add-list">
               <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddList}
               >
                  Добавить п/л
            </Button>
            </div>
            <div className="list-shift__button-print">
               <Button
                  variant="contained"
                  color="secondary"
                  onClick={handlePrintList}
               >
                  Печать смены
            </Button>
            </div>
         </div>
         <ShiftGrid />
      </div>
   )
}

export default ListShift;