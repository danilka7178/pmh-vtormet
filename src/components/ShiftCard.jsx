import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux";
import { setCurrentShift, deleteAndRemoveShift } from "../store/shifts/actions";

const useStyles = makeStyles({
   root: {
      maxWidth: 275,
      textAlign: "center",
      margin: "0 auto 10px"
   },
   title: {
      fontSize: 14,
   },
   buttons: {
      justifyContent: "center"
   },
});

function ShiftCard({ id, number, name, amount }) {
   const classes = useStyles();
   const dispatch = useDispatch();
   const shifts = useSelector(state => state.shiftsVault.shiftsList)

   const handleDelete = (e) => {
      const shift = shifts.find((obj) => {
         return (
            obj.id === e.currentTarget.id
         )
      })
      const question = window.prompt(`Вы действительно хотите удалить смену: "${shift ? shift.shiftName : ""}".
      Введите "${shift ? shift.shiftName : ""}" для удаления`)
      if (question === `${shift ? shift.shiftName : ""}`) {
         dispatch(deleteAndRemoveShift(e.currentTarget.id))
      } else {
         window.alert("Хорошо, не удаляем")
      }
   }

   const handleOpen = async (e) => {
      const currentShift = await shifts.find((obj) => {
         return (
            obj.id === e.currentTarget.id
         )
      })
      dispatch(setCurrentShift(currentShift))
   }

   return (
      <div className="list-shifts__shift">
         <Card className={classes.root} variant="outlined">
            <CardContent>
               <Typography className={classes.title} color="textSecondary">
                  Смена №{number}
               </Typography>
               <Typography variant="h5" component="h2">
                  {name}
               </Typography>
               <Typography component="p">
                  Кол-во работников в смене:{amount}
               </Typography>
            </CardContent>
            <CardActions className={classes.buttons}>
               <Button
                  id={id}
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={handleDelete}
               >
                  Удалить
                  </Button>
               <Button
                  component={Link} to="/current-shift"
                  id={id}
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={(e) => { handleOpen(e) }}
               >
                  Открыть
                  </Button>
            </CardActions>
         </Card>
      </div>
   );
}

export default ShiftCard;