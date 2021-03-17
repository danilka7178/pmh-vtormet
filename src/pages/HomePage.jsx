import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/pagesList/actions";

import Button from '@material-ui/core/Button';

function HomePage() {
   const dispatch = useDispatch();

   const handleChoosePage = (page) => {
      dispatch(setCurrentPage(page))
   }
   return (
      <div className="home-page">
         <h3 className="home-page__description">Добро пожаловать на сайт компании ООО "ПМХ-ВТОРМЕТ"</h3>
         <h4 className="home-page__info">Пожалуйста выберите интересующий вас раздел ниже:</h4>
         <div className="button-menu home-page__button">
            <Button
               variant="contained"
               color="primary"
               onClick={() => { handleChoosePage("ListWorkers") }}>Список сотрудников ООО "ПМХ-ВТОРМЕТ"
            </Button>
         </div>
         <div className="button-menu home-page__button">
            <Button
               variant="contained"
               color="primary"
               onClick={() => { handleChoosePage("ListTechniques") }}>
               Список техники ООО "ПМХ-ВТОРМЕТ"
            </Button>
         </div>
         <div className="button-menu home-page__button">
            <Button
               variant="contained"
               color="primary"
               onClick={() => { handleChoosePage("ListShifts") }}>
               Рабочие смены
            </Button>
         </div>
      </div>
   )
}

export default HomePage;