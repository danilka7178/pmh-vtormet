export const SET_DATA = "SET_DATA";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const SET_PERSONNEL_NUMBER = "SET_PERSONNEL_NUMBER";
export const SET_LAST_NAME = "SET_LAST_NAME";
export const SET_FIRST_NAME = "SET_FIRST_NAME";
export const SET_MIDDLE_NAME = "SET_MIDDLE_NAME";
export const SET_BIRTHDAY_DATE = "SET_BIRTHDAY_DATE";
export const SET_DIVISION_POSITION = "SET_DIVISION_POSITION";
export const SET_DIVISION_SUBDIVISION = "SET_DIVISION_SUBDIVISION";
export const SET_EMPLOYMENT_DATE = "SET_EMPLOYMENT_DATE";
export const RESET_FORM = "RESET_FORM"

export const setData = (data) => ({
   type: SET_DATA,
   payload: data,
})

export const openModal = (data) => ({
   type: OPEN_MODAL,
   payload: data,
})

export const closeModal = (data) => ({
   type: CLOSE_MODAL,
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

export const resetFormAddWorker = () => ({
   type: RESET_FORM,
})