import React from "react"
import Button from '@material-ui/core/Button';
import ShiftCard from "../components/ShiftCard";
import { getShifts } from "../store/shifts/actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"

import CircularIndeterminate from "../components/CircularIndeterminate";
import { openModal } from "../store/modals/actions";
import ModalAddShift from "../components/modals/ModalAddShift";

const ListShifts = ({ handleClickButtonGoBack }) => {
   const dispatch = useDispatch()
   React.useEffect(() => {
      dispatch(getShifts())
      // eslint-disable-next-line
   }, [])

   const shifts = useSelector(state => state.shiftsVault.shiftsList);

   const handleAddShift = () => {
      dispatch(openModal("visibleModalAddShift"))
   }

   return (
      <div className="list-shifts">
         <h3 className="list-shifts__description">Смены работников ООО "ПМХ-ВТОРМЕТ"</h3>
         <div className="list-shifts__buttons">
            <Button
               component={Link} to="/"
               variant="contained"
               color="primary"
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
            {shifts.length ? shifts.map((obj) => (
               <ShiftCard
                  key={obj.id}
                  id={obj.id}
                  number={+shifts.indexOf(obj) + 1}
                  name={obj.shiftName}
                  amount={obj.shift.length}
               />
            ))
               : <CircularIndeterminate />}
         </div>
         <ModalAddShift />
      </div>
   )
}

export default ListShifts;