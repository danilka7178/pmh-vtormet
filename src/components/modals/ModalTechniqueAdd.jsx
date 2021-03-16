import FormListTechniques from "../forms/FormListTechniques";
import useFormTechniques from "../../hooks/useFormTechniques";

function ModalTechniquesEdit() {
   const {
      handleClose, handleConfirm,
      editTextField,
      visibleEditOrAdd
   } = useFormTechniques();

   return (
      <FormListTechniques
         titleText={"Добавить"}
         currentTechnique={{}}
         handleClose={handleClose}
         handleConfirm={handleConfirm}
         editTextField={editTextField}
         visibleEditOrAdd={visibleEditOrAdd()} />
   );
}

export default ModalTechniquesEdit;