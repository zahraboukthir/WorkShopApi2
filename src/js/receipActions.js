import axios from "axios";
import { GETSEARCHEDVALUE, GET_ALL_RECEIPS_FAILED, GET_ALL_RECEIPS_SUCCESS, GET_ONE_RECEIPS_FAILED, GET_ONE_RECEIPS_SUCCESS, LOADING } from "./receipConst"

export const getallreceieps=(searchedValue)=>async(dispatch)=>{
dispatch({type:LOADING})
try {
    const { data } = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${searchedValue}&app_id=01903511&app_key=586dab1ccb1f25cc9e26ddc82ac993d5`
      );
      dispatch({
        type:GET_ALL_RECEIPS_SUCCESS,
        payload:data.hits
      })
} catch (error) {
    dispatch({
        type:GET_ALL_RECEIPS_FAILED,
        payload:error
    })
}
}
export const getonereceiep=(idreceip)=>async(dispatch)=>{
  dispatch({type:LOADING})
  try {
      const { data } = await axios.get(
        `https://api.edamam.com/api/recipes/v2/${idreceip}?type=public&app_id=01903511&app_key=586dab1ccb1f25cc9e26ddc82ac993d5
        `
        );
        dispatch({
          type:GET_ONE_RECEIPS_SUCCESS ,
          payload:data.recipe
        })
  } catch (error) {
      dispatch({
          type:GET_ONE_RECEIPS_FAILED,
          payload:error
      })
  }
  }

export const getSV=(value)=>{
  return {
    type:GETSEARCHEDVALUE,
    payload:value
  }
}