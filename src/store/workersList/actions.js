import axios from "axios";

export const SET_DATA = "SET_DATA";
export const SET_PERSONNEL_NUMBER = "SET_PERSONNEL_NUMBER";
export const SET_LAST_NAME = "SET_LAST_NAME";
export const SET_FIRST_NAME = "SET_FIRST_NAME";
export const SET_MIDDLE_NAME = "SET_MIDDLE_NAME";
export const SET_BIRTHDAY_DATE = "SET_BIRTHDAY_DATE";
export const SET_DIVISION_POSITION = "SET_DIVISION_POSITION";
export const SET_DIVISION_SUBDIVISION = "SET_DIVISION_SUBDIVISION";
export const SET_EMPLOYMENT_DATE = "SET_EMPLOYMENT_DATE";
export const SET_DRIVER_LICENCE = "SET_DRIVER_LICENCE";
export const RESET_FORM = "RESET_FORM";
export const NEW_WORKER_TO_STORE = "NEW_WORKER_TO_STORE";
export const DELETE_WORKER_FROM_STORE = "DELETE_WORKER_FROM_STORE";
export const PUT_OBJECT_IN_FORM = "PUT_OBJECT_IN_FORM";

export const setData = (data) => ({
   type: SET_DATA,
   payload: data,
})

export const setPersonnelNumber = (data) => ({
   type: SET_PERSONNEL_NUMBER,
   payload: data,
})

export const setLastName = (data) => ({
   type: SET_LAST_NAME,
   payload: data,
})

export const setFirstName = (data) => ({
   type: SET_FIRST_NAME,
   payload: data,
})

export const setMiddleName = (data) => ({
   type: SET_MIDDLE_NAME,
   payload: data,
})

export const setBirthdayDate = (data) => ({
   type: SET_BIRTHDAY_DATE,
   payload: data,
})

export const setDivisionPosition = (data) => ({
   type: SET_DIVISION_POSITION,
   payload: data,
})

export const setDivisionSubDivision = (data) => ({
   type: SET_DIVISION_SUBDIVISION,
   payload: data,
})

export const setEmploymentDate = (data) => ({
   type: SET_EMPLOYMENT_DATE,
   payload: data,
})

export const setDriverLicence = (data) => ({
   type: SET_DRIVER_LICENCE,
   payload: data,
})

export const resetFormAddWorker = () => ({
   type: RESET_FORM,
})

export const putNewWorkerToStore = (data) => ({
   type: NEW_WORKER_TO_STORE,
   payload: data,
})
export const deleteWorkerFromStore = (id) => ({
   type: DELETE_WORKER_FROM_STORE,
   payload: id,
})

export const getWorkersFromServer = () => async (dispatch) => {
   const { data } = await axios.get("https://6024f2ad36244d001797b2c7.mockapi.io/Workers")
   dispatch(setData(data))
}

export const postNewWorkerToServer = (data) => () => {
   axios.post("https://6024f2ad36244d001797b2c7.mockapi.io/Workers", data)
}

export const deleteWorkerFromServer = (id) => () => {
   axios.delete(`https://6024f2ad36244d001797b2c7.mockapi.io/Workers/${id}`)
}

export const putObjectInForm = (data) => ({
   type: PUT_OBJECT_IN_FORM,
   payload: data,
})