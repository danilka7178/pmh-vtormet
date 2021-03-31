import React from 'react';
import useFormList from '../../hooks/useFormList';
import FormList from "../forms/FormList";


const ModalEditList = () => {
   const {
      visibleModal, sortedWorkersList, sortedTechniquesList,
      handleClose, handleAdd, handleChangeRadioPlot,
      handleChangeDate, handleChangeTimeStart,
      handleChangeTimeEnd, handleChangeSelected,
      disabledButton
   } = useFormList({ isEdit: true });

   return (
      <FormList
         visibleModal={visibleModal}
         titleForm={"Редактирование"}
         handleChangeRadioPlot={handleChangeRadioPlot}
         handleChangeDate={handleChangeDate}
         handleChangeTimeStart={handleChangeTimeStart}
         handleChangeTimeEnd={handleChangeTimeEnd}
         handleChangeSelected={handleChangeSelected}
         sortedWorkersList={sortedWorkersList}
         sortedTechniquesList={sortedTechniquesList}
         handleAdd={handleAdd}
         handleClose={handleClose}
         disabledButton={disabledButton}
         buttonText={"Редактировать"}
      />
   )
}

export default ModalEditList