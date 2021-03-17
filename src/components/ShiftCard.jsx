import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/pagesList/actions";

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

function ShiftCard({ id, name, amount }) {
   const classes = useStyles();
   const dispatch = useDispatch();

   const handleDelete = () => {
      console.log("Логика удаления")
   }

   const handleOpen = (page) => {
      dispatch(setCurrentPage(page))
   }

   return (
      <div className="list-shifts__shift">
         <Card className={classes.root} variant="outlined">
            <CardContent>
               <Typography className={classes.title} color="textSecondary">
                  Смена №{id}
               </Typography>
               <Typography variant="h5" component="h2">
                  {name}
               </Typography>
               <Typography component="p">
                  Кол-во работников в смене:{amount}
               </Typography>
            </CardContent>
            <CardActions className={classes.buttons}>
               <Button size="small"
                  variant="contained"
                  color="primary"
                  onClick={handleDelete}
               >
                  Удалить
                  </Button>
               <Button size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => { handleOpen("ListShift") }}
               >
                  Открыть
                  </Button>
            </CardActions>
         </Card>
      </div>
   );
}

export default ShiftCard;