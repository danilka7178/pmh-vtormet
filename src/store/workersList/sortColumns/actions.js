import { setData } from "../actions";
import axios from "axios";

export const CLICK_SORT_INCREASE = "CLICK_SORT_INCREASE";
export const CLICK_SORT_REVERSE = "CLICK_SORT_REVERSE";
export const CLICK_SORT_DEFAULT = "CLICK_SORT_DEFAULT";

export const clickSORT_INCREASE = (id, usersArray) => (dispatch) => {
   if (id === "Табельный №") {
      const whatIs = usersArray.sort(function (a, b) {
         if (a.personnelNumber > b.personnelNumber) {
            return 1;
         }
         if (a.personnelNumber < b.personnelNumber) {
            return -1;
         }
         return 0;
      });
      dispatch(setData(whatIs));
   } else if (id === "Фамилия") {
      const whatIs = usersArray.sort(function (a, b) {
         if (a.lastName > b.lastName) {
            return 1;
         }
         if (a.lastName < b.lastName) {
            return -1;
         }
         return 0;
      });
      dispatch(setData(whatIs));
   }
   dispatch(clickSortIncrease());
}

export const clickSORT_REVERSE = (id, usersArray) => (dispatch) => {
   if (id === "Табельный №") {
      const whatIs = usersArray.sort(function (a, b) {
         if (a.personnelNumber < b.personnelNumber) {
            return 1;
         }
         if (a.personnelNumber > b.personnelNumber) {
            return -1;
         }
         return 0;
      });
      dispatch(setData(whatIs));
   } else if (id === "Фамилия") {
      const whatIs = usersArray.sort(function (a, b) {
         if (a.lastName < b.lastName) {
            return 1;
         }
         if (a.lastName > b.lastName) {
            return -1;
         }
         return 0;
      });
      dispatch(setData(whatIs));
   }
   dispatch(clickSortReverse());
}

export const clickSORT_DEFAULT = (id, _) => (dispatch) => {
   if (id === "Табельный №") {
      const getData = async () => {
         const { data } = await axios.get("https://6024f2ad36244d001797b2c7.mockapi.io/Workers");
         dispatch(setData(data));
      };
      getData();
   } else if (id === "Фамилия") {
      const getData = async () => {
         const { data } = await axios.get("https://6024f2ad36244d001797b2c7.mockapi.io/Workers");
         dispatch(setData(data));
      };
      getData();
   }
   dispatch(clickSortReverse());
}

export const clickSortIncrease = () => ({
   type: CLICK_SORT_INCREASE,
})

export const clickSortReverse = () => ({
   type: CLICK_SORT_REVERSE,
})

export const clickSortDefault = () => ({
   type: CLICK_SORT_DEFAULT,
})