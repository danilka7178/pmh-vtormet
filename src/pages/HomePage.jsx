import { useDispatch } from "react-redux";
import { setCurrentPage } from "../store/pagesList/actions";


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
         <div><button onClick={handleClickButtonListWorkers}>Список сотрудников ООО "ПМХ-ВТОРМЕТ"</button></div>
         <div><button onClick={handleClickButtonListListTechniques}>Список техники ООО "ПМХ-ВТОРМЕТ"</button></div>
      </div>
   )
}

export default HomePage;