import { DataGrid } from "@material-ui/data-grid";
import { useSelector } from "react-redux";

function ShiftGrid() {
   const columns = [
      { field: 'id', headerName: '№ п/п', width: 70 },
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

   shift.forEach((obj) => {
      if (obj.place === "УПМ") {
         if (obj.timeStart === "20.00") {
            const newObject = {
               id: obj.id,
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
            upmNight.push(newObject)
         } else {
            const newObject = {
               id: obj.id,
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
            upmDay.push(newObject)
         }
      } else if (obj.place === "КУ") {
         if (obj.timeStart === "20.00") {
            const newObject = {
               id: obj.id,
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
            kuNight.push(newObject)
         } else {
            const newObject = {
               id: obj.id,
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
            kuDay.push(newObject)
         }
      }
   })

   const handleClickRow = (data) => {
      console.log(data.row)
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
               : <h4 className="currently-shift-grid__not-find">В этой смене нет таких п/л, вы можете их добавить</h4>}
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
               : <h4 className="currently-shift-grid__not-find">В этой смене нет таких п/л, вы можете их добавить</h4>}
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
               : <h4 className="currently-shift-grid__not-find">В этой смене нет таких п/л, вы можете их добавить</h4>}
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
               : <h4 className="currently-shift-grid__not-find">В этой смене нет таких п/л, вы можете их добавить</h4>}
         </div>
      </div>
   )
}

export default ShiftGrid;