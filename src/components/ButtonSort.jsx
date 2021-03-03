import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   clickSortIncrease, clickSortReverse,
   clickSortDefault
} from "../store/workersList/sortColumns/actions"

function ButtonSort({ id }) {
   const dispatch = useDispatch();

   const usersArray = useSelector(state => state.workersListVault.workersList);

   const data = useSelector(state => state);

   const [buttonClassName, setButtonClassName] = React.useState("button-sort");

   const handleClickOnButtonSort = (e) => {
      if (buttonClassName === "button-sort") {
         setButtonClassName("button-sort button-sort--increase");
         dispatch(clickSortIncrease(e.target.id));
      } else if (buttonClassName === "button-sort button-sort--increase") {
         setButtonClassName("button-sort button-sort--increase-reverse");
         dispatch(clickSortReverse(e.target.id))
      } else {
         setButtonClassName("button-sort");
         dispatch(clickSortDefault(e.target.id))
      }
   }

   console.log(data);

   return (
      <button
         id={id}
         className={buttonClassName}
         onClick={handleClickOnButtonSort}
      >
      </button>
   )
}

export default ButtonSort;