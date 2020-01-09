// import React from 'react';
// import { connect } from 'react-redux';
// import TodoListItem from "./TodoListItem";

// const TodoList = ({todos}) => {
   
//     return (
//         <div>
//             {todos.length > 0 && todos.map(item => {
//                 return <TodoListItem key={item.id} item={item}  />
//             })}
//         </div>
//     );
// };
// const mapStateToProps = state => ({
//     todos: state.todos
//   })

// export default connect(mapStateToProps,null)(TodoList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TodoListItem from './TodoListItem';
import {deleteTodoItem,getTodos} from "../actions";

class TodoList extends Component {
    componentDidMount(){
        this.props.getTodos()
    }
    render() {
       const todos = this.props.todos;
  
    
        return (
            <div>
               { todos.todo && todos.todo.map(item => {
                   return (
                     <li key={item._id} onClick={() => this.props.deleteTodoItem(item._id)}>{item.text}</li>
                   )
               })}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        todos:state.todos
    }
}

export default connect(mapStateToProps,{deleteTodoItem,getTodos})(TodoList);



// this.props.todos && this.props.todos.length > 0 ? (this.props.todos.map(item => {
//     return <TodoListItem item={item} key={item.id} />
// })): (<h2>no element</h2>)