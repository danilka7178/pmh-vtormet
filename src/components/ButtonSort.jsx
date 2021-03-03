import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   clickSORT_INCREASE, clickSORT_REVERSE,
   clickSORT_DEFAULT
} from "../store/workersList/sortColumns/actions"

function ButtonSort({ id }) {
   const dispatch = useDispatch();

   const usersArray = useSelector(state => state.workersListVault.workersList);
   const data = useSelector(state => state);

   const [buttonClassName, setButtonClassName] = React.useState("button-sort");

   const handleClickOnButtonSort = (e) => {
      if (buttonClassName === "button-sort") {
         setButtonClassName("button-sort button-sort--increase");
         dispatch(clickSORT_INCREASE(e.target.id, usersArray));
      } else if (buttonClassName === "button-sort button-sort--increase") {
         setButtonClassName("button-sort button-sort--increase-reverse");
         dispatch(clickSORT_REVERSE(e.target.id, usersArray))
      } else {
         setButtonClassName("button-sort");
         dispatch(clickSORT_DEFAULT(e.target.id, usersArray))
      }
   }

   console.log(data)

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