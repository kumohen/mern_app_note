import axios from 'axios';

//let nextTodoId = 0
// export const addTodoItem = text => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })

// export const deleteTodoItem = todoId  => ({
//     type: 'DELETE_TODO',
//     todoId
//   })

  export function getTodos(){

    const request = axios.get(`http://localhost:4000/get_todo`)
                    .then(response => response.data  )
     return{
        type:'GET_TODOS',
        payload:request
    }
}
export function addTodoItem(item){
  const request = axios.post(`http://localhost:4000/add_item`,item)
      .then(response => console.log(response.data))
      .catch (error => {
          console.log(error)
      })
      return {
          type:'Add_TODO',
          payload:request
      }
}

export function deleteTodoItem(id){
  const request = axios.delete(`http://localhost:4000/delete_item/${id}`)
      .then(response => response.data)

      return {
          type:"DELETE_TODO",
          payload:request
      }
}

export function clearNewTodo(){
  return {
      type:'CLEAR_NEW_TODO',
      payload:{}
  }
}