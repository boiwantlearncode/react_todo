import React from 'react';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';

class App extends React.Component {
  state = {
    todo: [
      {
        id: 1,
        task: 'Do homework'
      },
      {
        id: 2,
        task: 'Help mom'
      },
      {
        id: 3,
        task: 'Be patient'
      }
    ]
  };
  
  render() {
    return (
      <div className="App">
        <Header />
        <Todo todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
