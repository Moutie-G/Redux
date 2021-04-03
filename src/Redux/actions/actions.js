import { ADD_ACTION, COMPLETE_ACTION, DELETE_ACTION, EDIT_ACTION } from "../actionsTypes/actionsTypes";


export const addAction =(newAction) => {
    return {
        type :ADD_ACTION,
        payload :newAction,
    };
};
export const deleteAction =(id) => {
    return {
        type :DELETE_ACTION,
        payload :id,
    };
};
export const completeAction =(id) => {
    return {
        type :COMPLETE_ACTION,
        payload :id,
    };
};
export const editAction =(editAction) => {
    return {
        type :EDIT_ACTION,
        payload :editAction,
    };
};