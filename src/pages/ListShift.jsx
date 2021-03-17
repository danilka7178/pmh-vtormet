import Button from '@material-ui/core/Button';

function ListShift({ handleClickButtonGoBack }) {
   return (
      <div className="list-shift">
         <h3 className="list-shifts__description">Я лист смены</h3>
         <div className="list-shifts__buttons">
            <Button
               variant="contained"
               color="primary"
               onClick={() => { handleClickButtonGoBack("ListShifts") }}
            >
               Назад
         </Button>
         </div>
      </div>
   )
}

export default ListShift;