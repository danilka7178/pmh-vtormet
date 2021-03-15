import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import ModalTechniquesEdit from "./ModalTechniquesEdit";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { changeVisibleModal, setCurrentTechnique, removeOldTechniqueFromStore } from "../../store/techniquesList/actions";

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />;
});


function ModalDialogTechniques() {
   const currentTechnique = useSelector(state => state.techniquesListVault.currentTechnique);
   const visibleModalActions = useSelector(state => state.techniquesListVault.visibleModals.actions);
   const dispatch = useDispatch();

   const handleClose = () => {
      dispatch(changeVisibleModal("actions"))
      dispatch(setCurrentTechnique({}))
   };

   const handleEdit = () => {
      dispatch(changeVisibleModal("editing"))
   }

   const handleDelete = () => {
      dispatch(changeVisibleModal("actions"))
      const question = window.confirm(`Вы действительно хотите удалить авто с номером ${currentTechnique.stateNumber}?`)
      if (question) {
         dispatch(removeOldTechniqueFromStore(currentTechnique.id))
         axios.delete(`https://6024f2ad36244d001797b2c7.mockapi.io/Techniques/${currentTechnique.id}`)
      } else {
         return
      }
      dispatch(setCurrentTechnique({}))
   }

   return (
      <div>
         <Dialog
            open={visibleModalActions ? visibleModalActions : false}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
         >
            <DialogTitle id="alert-dialog-slide-title">{"Выберите предложенный вариант взаимодействия"}</DialogTitle>
            <DialogContent>
               <DialogContentText id="alert-dialog-slide-description">
                  Вы можете отредактировать выбранную Вами технику, или же удалить ее из списка.
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleEdit} variant="outlined" color="primary">
                  Редактировать
               </Button>
               <Button onClick={handleDelete} variant="contained" color="secondary">
                  Удалить
               </Button>
            </DialogActions>
         </Dialog>
         <ModalTechniquesEdit />
      </div>
   );
}

export default ModalDialogTechniques;