// import React from 'react';
// import { connect } from 'react-redux'
// import {deleteTodoItem} from "../actions";

// const TodoListItem = ({item,dispatch}) => {
//   const deleteTodoItemformList = (id)=>{
//       console.log(id)
//        dispatch(deleteTodoItem(id))
//    }
//     return (
//         <div>
//            <li onClick={() => deleteTodoItemformList(item.id)}>{item.text}</li>
//         </div>
//     );
// };

// export default connect()(TodoListItem);
import React, { Component } from 'react';
import {deleteTodoItem} from "../actions";
import { connect } from 'react-redux';

class TodoListItem extends Component {

    // delete = (id) => {
    //     this.props.deleteTodoItem(id);
    // }
    render() {
        const {id,text} = this.props.item;
        return (
            <div>
                <li onClick={()=> this.props.deleteTodoItem(id)}>{text}</li>
                
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log(state.todos)
    return {
        state
    }
}

export default connect(mapStateToProps,{deleteTodoItem})(TodoListItem);