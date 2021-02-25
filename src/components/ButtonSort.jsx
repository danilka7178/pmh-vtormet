import React from "react";

function ButtonSort({ id }) {

   const [buttonClassName, setButtonClassName] = React.useState("button-sort");

   const handleClickOnButtonSort = (e) => {
      if (buttonClassName === "button-sort") {
         setButtonClassName("button-sort button-sort--increase")
      } else if (buttonClassName === "button-sort button-sort--increase") {
         setButtonClassName("button-sort button-sort--increase-reverse")
      } else {
         setButtonClassName("button-sort")
      }
   }

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