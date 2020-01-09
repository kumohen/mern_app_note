


const todo = (state = {}, action) => {
  switch (action.type) {
    case 'GET_TODOS':
        return {...state,todo:action.payload}
    case 'Add_TODO':
          return {...state,newtodo:action.payload}   
    case 'CLEAR_NEW_TODO':
            return {...state,newbook:action.payload}      
    case 'DELETE_TODO':
            return  {...state,postDeleted:action.payload}       
    default:
      return state
  }
}
export default  (todo);

// const todo = (state = {}, action) => {
//     switch (action.type) {
//       case 'GET_TODOS':
//           return {...state,todo:action.payload}
//       case 'ADD_TODO':
       
//         return [
//           ...state,
//             {
//             id: action.id,
//             text: action.text
//           }
//         ]
//       case 'DELETE_TODO':
         
//             return state.filter(todo => todo.id !==  action.todoId)
            
//       default:
//         return state
//     }
//   }
//   export default  (todo);