import Button from '@material-ui/core/Button';
import { useSelector } from "react-redux";

function ListShift({ handleClickButtonGoBack }) {
   const currentShift = useSelector(state => state.shiftsVault.currentShift);
   console.log(currentShift)
   return (
      <div className="list-shift">
         <h3 className="list-shifts__description">Я лист смены</h3>
         <div className="list-shifts__buttons">
            <Button
               variant="contained"
               color="primary"
               onClick={() => { handleClickButtonGoBack("ListShifts") }}
            >
               Назад
         </Button>
         </div>
         <div>
            <h3>Выбранная смена: {currentShift.shiftName}</h3>

         </div>
      </div>
   )
}

export default ListShift;