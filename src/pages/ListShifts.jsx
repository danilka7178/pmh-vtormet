import React from "react"
import Button from '@material-ui/core/Button';
import ShiftCard from "../components/ShiftCard";
import { getShifts } from "../store/shifts/actions";
import { useSelector, useDispatch } from "react-redux";

const ListShifts = ({ handleClickButtonGoBack }) => {
   const dispatch = useDispatch()
   const shifts = useSelector(state => state.shiftsVault.shiftsList)

   React.useEffect(() => {
      dispatch(getShifts())
      // eslint-disable-next-line
   }, [])

   const handleAddShift = () => {
      console.log(`Клик по кнопке "Добавить смену"`)
   }

   return (
      <div className="list-shifts">
         <h3 className="list-shifts__description">Смены работников ООО "ПМХ-ВТОРМЕТ"</h3>
         <div className="list-shifts__buttons">
            <Button
               variant="contained"
               color="primary"
               onClick={() => { handleClickButtonGoBack("") }}
            >
               Назад
         </Button>
            <Button
               variant="contained"
               color="secondary"
               onClick={handleAddShift}
            >
               Добавить смену
         </Button>
         </div>
         <div className="list-shifts__shifts">
            {shifts ? shifts.map((obj) => (
               <ShiftCard
                  key={obj.id}
                  id={obj.id}
                  name={obj.shiftName}
                  amount={obj.shift.length}
               />
            ))
               : <h4>Подгружаю смены</h4>}
         </div>
      </div>
   )
}

export default ListShifts;