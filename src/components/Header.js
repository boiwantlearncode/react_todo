import React, {Component} from 'react';

class Header extends Component {
    render() {
        return(
            <div style={headerStyles}>
                <h1>Todo</h1>
            </div>
        )
    }
}

const headerStyles = {
    textAlign: 'center',
    padding: '10px',
    background: 'grey'
}

export default Header;