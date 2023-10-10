import axios from "axios";
import {
  createUserFailed,
  createUserStart,
    createUserSuccess,
    deleteUserFailed,
    deleteUsersSuccess,
    deleteUserStart,
    getUsersFailed,
    getUsersStart,
    getUsersSuccess,
    updateUserfailed,
    updateUserStart,
    updateUserSuccess,
  } from "./../Redux/Reducers/userSlice";

const baseUrl = "http://localhost:8080"

export const getAllUsers = async ( dispatch) => {
    dispatch(getUsersStart());
    try {
      const res = await axios.get(`${baseUrl}/todos`);
      dispatch(getUsersSuccess(res.data));
    } catch (err) {
      dispatch(getUsersFailed());
    }
};

export const deleteUser = async ( dispatch, id ) => {
    dispatch(deleteUserStart());
    try {
      const res = await axios.delete(`${baseUrl}/delete-todo/${id}`);
      dispatch(deleteUsersSuccess(res.data));
    } catch (err) {
      dispatch(deleteUserFailed(err.response.data));
    }
};

export const createUser = async (user, dispatch) => {
  dispatch(createUserStart());
  try{
    const res = await axios.post(`${baseUrl}/add-todo`, user);
    dispatch(createUserSuccess(res.data))
  }catch(err){
    dispatch(createUserFailed(err.response.data))
  }
}

export const updateUser = async (user,dispatch, id) => {
  dispatch(updateUserStart());
  try{
    const res = await axios.put(`${baseUrl}/edit-todo/${id}`, user);
    dispatch(updateUserSuccess(res.data))
  }catch(err){
    dispatch(updateUserfailed(err.response.data))
  }
}