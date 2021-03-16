import {
   setStateNumberCurrentTechnique,
   setBrandCurrentTechnique,
   setInventoryNumberCurrentTechnique,
   setFuelCurrentTechnique,
   changeTechniqueInfo
} from "../store/techniquesList/actions";

import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../store/modals/actions"
import { putNewTechniqueToStore, postNewTechniqueToServer } from "../store/techniquesList/actions"

const deaultObj = {
   isEdit: false,
}

function useFormTechniques({ isEdit } = deaultObj) {
   const dispatch = useDispatch();
   const currentTechnique = useSelector(state => state.techniquesListVault.currentTechnique);
   const visibleModalEdit = useSelector(state => state.modalsVault.visibleModals.visibleModalEditingTechniques);
   const visibleModalAdd = useSelector(state => state.modalsVault.visibleModals.visibleModalAddTechnique);

   const handleClose = () => {
      dispatch(closeModal("visibleModalEditingTechniques"))
   };

   const handleConfirm = () => {
      if (!isEdit) {
         dispatch(closeModal("visibleModalAddTechniques"))
         dispatch(putNewTechniqueToStore(currentTechnique))
         dispatch(postNewTechniqueToServer(currentTechnique))
      } else {
         dispatch(closeModal("visibleModalEditingTechniques"))
         dispatch(changeTechniqueInfo(currentTechnique))
      }
   };

   const editTextField = (e) => {
      switch (e.target.id) {
         case "stateNumber":
            return dispatch(setStateNumberCurrentTechnique(e.target.value))
         case "brand":
            return dispatch(setBrandCurrentTechnique(e.target.value))
         case "inventoryNumber":
            return dispatch(setInventoryNumberCurrentTechnique(e.target.value))
         case "fuel":
            return dispatch(setFuelCurrentTechnique(e.target.value))
         default:
            break;
      }
   };

   const visibleEditOrAdd = () => {
      if (!isEdit) {
         return visibleModalAdd
      } else {
         return visibleModalEdit
      }
   }


   return {
      handleClose,
      handleConfirm,
      editTextField,
      currentTechnique,
      visibleEditOrAdd
   }
}

export default useFormTechniques;