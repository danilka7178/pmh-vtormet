import axios from "axios";

export const SET_SHIFTS = "SET_SHIFTS";
export const SET_CURRENT_SHIFT = "SET_CURRENT_SHIFT";

export const getShifts = () => async (dispatch) => {
   const { data } = await axios.get("https://6024f2ad36244d001797b2c7.mockapi.io/Shifts")
   dispatch(setShifts(data))
}

export const setShifts = (data) => ({
   type: SET_SHIFTS,
   payload: data
})

export const setCurrentShift = (data) => ({
   type: SET_CURRENT_SHIFT,
   payload: data
})