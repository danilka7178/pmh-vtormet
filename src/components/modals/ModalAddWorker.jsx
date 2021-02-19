import React from 'react';
import useForm from '../../hooks/useForm';

import FormListWorker from "../forms/FormListWorkers"

const ModalAddWorker = () => {

   const {
      handleClose, changeInputValue,
      handleAdd, disabledButtonAddWorker,
      visibleModalDoThingsWithWorker,
      valueContent
   } = useForm();


   return (
      <FormListWorker
         visibleModalDoThingsWithWorker={visibleModalDoThingsWithWorker()}
         titleForm={"Добавить "}
         contentText={"добавления "}
         contentButton={"Добавить"}
         disabledButtonAddWorker={disabledButtonAddWorker}
         handleAdd={handleAdd}
         changeInputValue={changeInputValue}
         handleClose={handleClose}
         valueContent={valueContent}
      />
   );
}

export default ModalAddWorker;