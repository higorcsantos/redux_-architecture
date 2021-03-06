import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
 
import * as todoActions from '../../actions/todo'



class TodoList extends Component{
    state = {
        newTodoText: ''
    }
    constructor(props){
        super(props);

        console.log(props);
    }
    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText);
        this.setState({newTodoText: ''});
    }
    render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    ))}
                </ul>
                <input type="text"
                value={this.state.newTodoText}
                onChange={(e) => this.setState({newTodoText: e.target.value})}/>
                <button onClick={this.addNewTodo}>Novo Todo</button>
            </div>
        )
    }
}

const mapToStateProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = dispatch => bindActionCreators(todoActions,dispatch);
export default connect(mapToStateProps, mapDispatchToProps)(TodoList)