import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../store/modals/actions";
import { setCurrentList } from "../store/shifts/actions"
import ModalDialogList from "../components/modals/ModalDialogList"

function ShiftGrid() {
   const dispatch = useDispatch();
   const columns = [
      { field: 'id', headerName: '№ п/п', width: 70 },
      { field: 'date', headerName: 'Дата', width: 150, },
      { field: 'place', headerName: 'Участок', width: 100 },
      { field: 'timeStart', headerName: 'Начало работы', width: 100 },
      { field: 'timeEnd', headerName: 'Конец работы', width: 100 },
      { field: 'carName', headerName: 'Марка', width: 250, },
      { field: 'carUniqNumber', headerName: 'Инв. №', width: 100, },
      { field: 'carStateNumber', headerName: 'Гос.номер', width: 120, },
      { field: 'driverName', headerName: 'ФИО', width: 250, },
      { field: 'driverUniqNumber', headerName: 'Табельный №', width: 120, },
      { field: 'driverLicence', headerName: '№ ВУ', width: 200, },
   ];

   const shift = useSelector(state => state.shiftsVault.currentShift.shift);
   const upmNight = [];
   const upmDay = [];
   const kuNight = [];
   const kuDay = [];

   const transformationDate = (date) => {
      if (date) {
         const someTryMassive = [];
         const newMassive = date.replace(/-/g, ".").split("");

         someTryMassive.push(newMassive[8], newMassive[9], newMassive[7],
            newMassive[5], newMassive[6],
            newMassive[4], newMassive[0], newMassive[1],
            newMassive[2], newMassive[3])

         return (
            someTryMassive.join("")
         )
      }
   }

   shift.forEach((obj) => {
      const newObject = {
         id: obj.id,
         date: transformationDate(obj.date),
         place: obj.place,
         timeStart: obj.timeStart,
         timeEnd: obj.timeEnd,
         carName: obj.car.name,
         carUniqNumber: obj.car.carUniqNumber,
         carStateNumber: obj.car.stateNumber,
         driverName: obj.driver.name,
         driverUniqNumber: obj.driver.uniqNumber,
         driverLicence: obj.driver.driverLicence,
      }
      if (obj.place === "УПМ") {
         if (obj.timeStart === "20.00") {
            upmNight.push(newObject)
         } else {
            upmDay.push(newObject)
         }
      } else if (obj.place === "КУ") {
         if (obj.timeStart === "20.00") {
            kuNight.push(newObject)
         } else {
            kuDay.push(newObject)
         }
      }
   })

   const handleClickRow = (data) => {
      const newCurrentList = {
         id: data.row.id,
         date: data.row.date,
         place: data.row.place,
         timeStart: data.row.timeStart,
         timeEnd: data.row.timeEnd,
         driver: {
            name: data.row.driverName,
            uniqNumber: data.row.driverUniqNumber,
            licence: data.row.driverLicence,
         },
         car: {
            name: data.row.carName,
            uniqNumber: data.row.carUniqNumber,
            stateNumber: data.row.carStateNumber,
         },
      }
      dispatch(setCurrentList(newCurrentList))
      dispatch(openModal("visibleModalActionsList"))
   }

   return (
      <div className="shift-grid">
         <div className="shift-grid__currently currently-shift-grid">
            <h3 className="currently-shift-grid__desctiption 
            currently-shift-grid__desctiption--night">УПМ - ночь</h3>
            {upmNight.length ?
               (
                  <div
                     className=" currently-shift-grid__grid currently-shift-grid__grid--upm"
                     style={{ width: '90%', marginLeft: "auto", marginRight: "auto" }}>
                     <DataGrid
                        autoHeight={true}
                        rows={upmNight ? upmNight : null}
                        columns={columns}
                        pageSize={5}
                        onRowClick={(data) => handleClickRow(data)}
                     />
                  </div>)
               : <h4 className="currently-shift-grid__not-find">В этой смене нет п/л, вы можете их добавить</h4>}
         </div>
         <div className="shift-grid__currently currently-shift-grid">
            <h3 className="currently-shift-grid__desctiption">УПМ - день</h3>
            {upmDay.length ?
               (
                  <div
                     className="currently-shift-grid__grid currently-shift-grid__grid--upm"
                     style={{ width: '90%', marginLeft: "auto", marginRight: "auto" }}>
                     <DataGrid
                        autoHeight={true}
                        rows={upmDay ? upmDay : null}
                        columns={columns}
                        pageSize={5}
                        onRowClick={(data) => handleClickRow(data)}
                     />
                  </div>)
               : <h4 className="currently-shift-grid__not-find">В этой смене таких п/л, вы можете их добавить</h4>}
         </div>
         <div className="shift-grid__currently currently-shift-grid">
            <h3 className="currently-shift-grid__desctiption 
            currently-shift-grid__desctiption--night">КУ - ночь</h3>
            {kuNight.length ?
               (
                  <div
                     className="currently-shift-grid__grid"
                     style={{ width: '90%', marginLeft: "auto", marginRight: "auto" }}>
                     <DataGrid
                        autoHeight={true}
                        rows={kuNight ? kuNight : null}
                        columns={columns}
                        pageSize={5}
                        onRowClick={(data) => handleClickRow(data)}
                     />
                  </div>)
               : <h4 className="currently-shift-grid__not-find">В этой смене нет п/л, вы можете их добавить</h4>}
         </div>
         <div className="shift-grid__currently currently-shift-grid">
            <h3 className="currently-shift-grid__desctiption">КУ - день</h3>
            {kuDay.length ?
               (
                  <div
                     className="currently-shift-grid__grid"
                     style={{ width: '90%', marginLeft: "auto", marginRight: "auto" }}>
                     <DataGrid
                        autoHeight={true}
                        rows={kuDay ? kuDay : null}
                        columns={columns}
                        pageSize={5}
                        onRowClick={(data) => handleClickRow(data)}
                     />
                  </div>)
               : <h4 className="currently-shift-grid__not-find">В этой смене нет п/л, вы можете их добавить</h4>}
         </div>
         <ModalDialogList />
      </div>
   )
}

export default ShiftGrid;