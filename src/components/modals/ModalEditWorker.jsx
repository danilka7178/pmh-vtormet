import React from 'react';
import useFormWorkers from '../../hooks/useFormWorkers';
import FormListWorker from "../forms/FormListWorkers"

const ModalEditWorker = () => {

   const {
      handleClose, changeInputValue,
      handleAdd, disabledButtonAddWorker,
      visibleModalDoThingsWithWorker
   } = useFormWorkers({ isEdit: true });

   return (
      <FormListWorker
         visibleModalDoThingsWithWorker={visibleModalDoThingsWithWorker()}
         titleForm={"Изменение "}
         contentText={"редактирования "}
         contentButton={"Изменить"}
         disabledButtonAddWorker={disabledButtonAddWorker}
         handleAdd={handleAdd}
         changeInputValue={changeInputValue}
         handleClose={handleClose}
      />
   );
}

export default ModalEditWorker;