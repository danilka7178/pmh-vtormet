import React from "react";

function ButtonSort({ id }) {

   const [buttonClassName, setButtonClassName] = React.useState("button-sort");

   const handleClickOnButtonSort = (e) => {
      console.log(`Клик по кнопке, id заголовка: ${e.target.id}`)
      console.log(`Класс: ${e.target.className}`)
      if (buttonClassName === "button-sort") {
         setButtonClassName("button-sort button-sort--increase")
      } else if (buttonClassName === "button-sort button-sort--increase") {
         setButtonClassName("button-sort button-sort--increase--r")
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