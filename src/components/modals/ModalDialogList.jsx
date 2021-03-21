import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import { useSelector, useDispatch } from "react-redux";
import {
   setCurrentList, deleteList,
   deleteAndRemoveShift, postAndAddShift
} from "../../store/shifts/actions";
import { openModal, closeModal } from "../../store/modals/actions";

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />;
});

const ModalDialogList = () => {
   const currentShift = useSelector(state => state.shiftsVault.currentShift);
   const currentList = useSelector(state => state.shiftsVault.currentList);
   const visibleModalActions = useSelector(state => state.modalsVault.visibleModals.visibleModalActionsList);
   const dispatch = useDispatch();

   const handleClose = () => {
      dispatch(closeModal("visibleModalActionsList"))
      dispatch(setCurrentList({}))
   };

   const handleEdit = () => {
      dispatch(openModal("visibleModalEditList"))
   }

   const handlePrint = () => {
      console.log("Логика печати")
   }

   const handleDelete = () => {
      const question = window.confirm(`Вы действительно хотите удалить п/л ${currentList.driverName}?`)
      if (question) {
         dispatch(deleteList(currentList.id))
         const newShift = {
            id: currentShift.id - 1,
            shiftName: currentShift.shiftName,
            shift: currentShift.shift.slice().filter((obj) => {
               return (
                  obj.id !== currentList.id
               )
            })
         }
         if (!newShift) return
         dispatch(deleteAndRemoveShift(currentShift.id))
         dispatch(postAndAddShift(newShift))
         dispatch(setCurrentList({}))
         dispatch(closeModal("visibleModalActionsList"))
      } else {
         return
      }
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
                  Вы можете печатать, отредактировать п/л, или же удалить его.
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button style={{ marginRight: "80px" }} onClick={handlePrint} variant="contained" color="default">
                  Печать
               </Button>
               <Button onClick={handleEdit} variant="outlined" color="primary">
                  Редактировать
               </Button>
               <Button onClick={handleDelete} variant="contained" color="secondary">
                  Удалить
               </Button>
            </DialogActions>
         </Dialog>
         {/* <ModalListEdit /> */}
      </div>
   )
}

export default ModalDialogList;