import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/pagesList/actions";

import Button from '@material-ui/core/Button';

function HomePage() {
   const dispatch = useDispatch();

   const handleClickButtonListWorkers = () => {
      dispatch(setCurrentPage("ListWorkers"))
   }
   const handleClickButtonListListTechniques = () => {
      dispatch(setCurrentPage("ListTechniques"))
   }

   return (
      <div>
         <h3>Добро пожаловать на сайт компании ООО "ПМХ-ВТОРМЕТ"</h3>
         <h4>Пожалуйста выберите интересующий вас раздел ниже:</h4>
         <div className="button-menu">
            <Button
               variant="contained"
               color="primary"
               onClick={handleClickButtonListWorkers}>Список сотрудников ООО "ПМХ-ВТОРМЕТ"
            </Button>
         </div>
         <div className="button-menu">
            <Button
               variant="contained"
               color="primary"
               onClick={handleClickButtonListListTechniques}>
               Список техники ООО "ПМХ-ВТОРМЕТ"
            </Button>
         </div>
      </div>
   )
}

export default HomePage;