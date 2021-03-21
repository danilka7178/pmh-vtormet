import axios from "axios";

export const SET_SHIFTS = "SET_SHIFTS";
export const SET_CURRENT_SHIFT = "SET_CURRENT_SHIFT";
export const ADD_SHIFT = "ADD_SHIFT";
export const REMOVE_SHIFT = "REMOVE_SHIFT";
export const ADD_LIST = "ADD_LIST";
export const SET_CURRENT_LIST = "SET_CURRENT_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const OBJ_TO_EDIT_LIST = "OBJ_TO_EDIT_LIST";

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

export const objToEditList = (data) => ({
   type: OBJ_TO_EDIT_LIST,
   payload: data
})

