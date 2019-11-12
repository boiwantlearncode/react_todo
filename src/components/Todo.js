import React, {Component} from 'react';
import TodoItem from './TodoItem';

class Todo extends Component {
    render() {
        return(
            <div style={todoStyles}>
                <div>
                    {this.props.todo.map(todoItem => <TodoItem task={todoItem.task} />)}
                </div>
            </div>
        )
    }
}

const todoStyles = {
    fontSize: '40px',
    width: '100%',
}

export default Todo;