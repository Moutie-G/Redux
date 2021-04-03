import { ADD_ACTION, COMPLETE_ACTION, DELETE_ACTION, EDIT_ACTION } from "../actionsTypes/actionsTypes";




const inistialState =[{id :Math.random(),task:"wake ap" ,isDone :false}];
const taskReducer = (state=inistialState,{type,payload}) =>{
switch (type) {
  case ADD_ACTION :
    return [...state,payload] ;
  case DELETE_ACTION :
    return state.filter((el)=>el.id !== payload) ;
  case COMPLETE_ACTION :
    return state.map((el) => el.id === payload ? {...el,isDone :!el.isDone} : el) ;
  case EDIT_ACTION :
    return state.map((el)=>(el.id===payload.id ? payload :el));
    default :
    return state ;      
}
}
export default taskReducer ;