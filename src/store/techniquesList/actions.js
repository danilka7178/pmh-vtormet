import axios from "axios";

export const SET_TECHNIQUES_LIST = "SET_TECHNIQUES_LIST";
export const SET_CURRENT_TECHNIQUE = "SET_CURRENT_TECHNIQUE";
export const SET_STATE_NUMBER_CURRENT_TECHNIQUE = "SET_STATE_NUMBER_CURRENT_TECHNIQUE";
export const SET_BRAND_CURRENT_TECHNIQUE = "SET_BRAND_CURRENT_TECHNIQUE";
export const SET_INVENTORY_NUMBER_CURRENT_TECHNIQUE = "SET_INVENTORY_NUMBER_CURRENT_TECHNIQUE";
export const SET_FUEL_CURRENT_TECHNIQUE = "SET_FUEL_CURRENT_TECHNIQUE";
export const CHANGE_TECHNIQUE_INFO = "CHANGE_TECHNIQUE_INFO";
export const PUT_NEW_TECHNIQUE_TO_STORE = "PUT_NEW_TECHNIQUE_TO_STORE";
export const REMOVE_OLD_TECHNIQUE_FROM_STORE = "REMOVE_OLD_TECHNIQUE_FROM_STORE";

export const getTechniquesList = () => async (dispatch) => {
   const { data } = await axios.get("https://6024f2ad36244d001797b2c7.mockapi.io/Techniques")
   dispatch(setTechniquesList(data))
}

export const setTechniquesList = (data) => ({
   type: SET_TECHNIQUES_LIST,
   payload: data
})

export const setCurrentTechnique = (data) => ({
   type: SET_CURRENT_TECHNIQUE,
   payload: data
})

export const setStateNumberCurrentTechnique = (data) => ({
   type: SET_STATE_NUMBER_CURRENT_TECHNIQUE,
   payload: data
})

export const setBrandCurrentTechnique = (data) => ({
   type: SET_BRAND_CURRENT_TECHNIQUE,
   payload: data
})

export const setInventoryNumberCurrentTechnique = (data) => ({
   type: SET_INVENTORY_NUMBER_CURRENT_TECHNIQUE,
   payload: data
})

export const setFuelCurrentTechnique = (data) => ({
   type: SET_FUEL_CURRENT_TECHNIQUE,
   payload: data
})

export const postNewTechniqueToServer = (data) => () => {
   axios.post("https://6024f2ad36244d001797b2c7.mockapi.io/Techniques", data)
}

export const putNewTechniqueToStore = (data) => ({
   type: PUT_NEW_TECHNIQUE_TO_STORE,
   payload: data
})

export const removeOldTechniqueFromStore = (id) => ({
   type: REMOVE_OLD_TECHNIQUE_FROM_STORE,
   payload: id
})

export const changeTechniqueInfo = (data) => (dispatch) => {
   dispatch(removeOldTechniqueFromStore(+data.id))
   dispatch(postNewTechniqueToServer(data))
   dispatch(putNewTechniqueToStore(data))
   axios.delete(`https://6024f2ad36244d001797b2c7.mockapi.io/Techniques/${data.id}`)
}