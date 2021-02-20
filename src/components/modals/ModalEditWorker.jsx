import React from 'react';
import useForm from '../../hooks/useForm';
import FormListWorker from "../forms/FormListWorkers"

const ModalEditWorker = () => {

   const {
      handleClose, changeInputValue,
      handleAdd, disabledButtonAddWorker,
      visibleModalDoThingsWithWorker,
      valueContent
   } = useForm({ isEdit: true });

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
         valueContent={valueContent}
      />
   );
}

export default ModalEditWorker;