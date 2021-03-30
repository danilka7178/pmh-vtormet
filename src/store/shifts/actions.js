import axios from "axios";

//! -- Логика добавления/изменения смены:

export const SET_SHIFTS = "SET_SHIFTS";
export const SET_CURRENT_SHIFT = "SET_CURRENT_SHIFT";
export const ADD_SHIFT = "ADD_SHIFT";
export const REMOVE_SHIFT = "REMOVE_SHIFT";
export const ADD_LIST = "ADD_LIST";
export const SET_CURRENT_LIST = "SET_CURRENT_LIST";
export const DELETE_LIST = "DELETE_LIST";

//! -- Логика добавления/изменения п/л:

export const SET_PLOT = "SET_PLOT";
export const SET_DATE = "SET_DATE";
export const SET_TIME_START = "SET_TIME_START";
export const SET_TIME_END = "SET_TIME_END";
export const SET_DRIVER_NAME = "SET_DRIVER_NAME";
export const SET_DRIVER_UNIQ_NUMB = "SET_DRIVER_UNIQ_NUMB";
export const SET_DRIVER_LICENSE = "SET_DRIVER_LICENSE";
export const SET_CAR_NAME = "SET_CAR_NAME";
export const SET_CAR_UNIQ_NUMB = "SET_CAR_UNIQ_NUMB";
export const SET_CAR_STATE_NUMB = "SET_CAR_STATE_NUMB";

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

export const postAndAddShift = (data) => (dispatch) => {
   dispatch(addShift(data))
   axios.post("https://6024f2ad36244d001797b2c7.mockapi.io/Shifts", data)
}

export const addShift = (data) => ({
   type: ADD_SHIFT,
   payload: data
})

export const deleteAndRemoveShift = (id) => (dispatch) => {
   dispatch(removeShift(id))
   axios.delete(`https://6024f2ad36244d001797b2c7.mockapi.io/Shifts/${id}`)
}

export const removeShift = (id) => ({
   type: REMOVE_SHIFT,
   payload: id
})

export const AddAndPushList = (data, newShift) => async (dispatch) => {
   await dispatch(deleteAndRemoveShift(newShift.id))
   await dispatch(addList(data))
   dispatch(postAndAddShift(newShift))
}

export const addList = (data) => ({
   type: ADD_LIST,
   payload: data
})

export const setCurrentList = (data) => ({
   type: SET_CURRENT_LIST,
   payload: data
})

export const deleteList = (id) => ({
   type: DELETE_LIST,
   payload: id
})

//! -- Логика добавления/изменения п/л:

export const setPlot = (data) => ({
   type: SET_PLOT,
   payload: data
})

export const setDate = (data) => ({
   type: SET_DATE,
   payload: data
})

export const setTimeStart = (data) => ({
   type: SET_TIME_START,
   payload: data
})

export const setTimeEnd = (data) => ({
   type: SET_TIME_END,
   payload: data
})

export const setDriverName = (data) => ({
   type: SET_DRIVER_NAME,
   payload: data
})

export const setDriverUniqNumb = (data) => ({
   type: SET_DRIVER_UNIQ_NUMB,
   payload: data
})

export const setDriverLicense = (data) => ({
   type: SET_DRIVER_LICENSE,
   payload: data
})

export const setCarName = (data) => ({
   type: SET_CAR_NAME,
   payload: data
})

export const setCarUniqNumb = (data) => ({
   type: SET_CAR_UNIQ_NUMB,
   payload: data
})

export const setCarStateNumb = (data) => ({
   type: SET_CAR_STATE_NUMB,
   payload: data
})
