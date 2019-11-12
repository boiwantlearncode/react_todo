import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        return(
            <div style={todoItemStyles}>
                {this.props.task}
            </div>
        )
    }
}

const todoItemStyles = {
    fontSize: '26px',
    background: 'lightGrey',
    padding: '10px 15px',
    border: '1px dotted black'
}

export default TodoItem;