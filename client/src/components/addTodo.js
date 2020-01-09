import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodoItem ,clearNewTodo} from '../actions';




class AddTodo extends Component {
    state={
        text:""
    }
    handleTextInput = e => {
        this.setState({text:e.target.value})
    }
    addTodoItems = (e)=>{
        e.preventDefault();
        this.props.addTodoItem({text:this.state.text})
    }
    componentWillUnmount(){
        this.props.dispatch(clearNewTodo());
    }
    render() {
        
        return (
            <div>
               
                    <input name="text" onChange={this.handleTextInput} />
                    <button  onClick={this.addTodoItems}>submit</button>
               
            </div>
        );
    }
}

// const mapDispatchToProps = dispatch => ({
//     ...other methods,
//     dispatch                
//  })
const mapStateToProps = state => {
    console.log(state)
    return {
        state
    }
}

export default connect(mapStateToProps,{addTodoItem})(AddTodo);