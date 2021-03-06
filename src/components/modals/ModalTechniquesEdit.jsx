import FormListTechniques from "../forms/FormListTechniques";
import useFormTechniques from "../../hooks/useFormTechniques";

function ModalTechniquesEdit() {
   const {
      handleClose, handleConfirm,
      editTextField, currentTechnique,
      visibleEditOrAdd
   } = useFormTechniques({ isEdit: true });

   return (
      <FormListTechniques
         titleText={"Редактировать"}
         currentTechnique={currentTechnique}
         handleClose={handleClose}
         handleConfirm={handleConfirm}
         editTextField={editTextField}
         visibleEditOrAdd={visibleEditOrAdd()} />
   );
}

export default ModalTechniquesEdit;