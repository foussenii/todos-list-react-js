
import React from 'react';
export default class TodosList extends React.Component {


  render() {
    
    return(
  <form onSubmit={this.handleCreate.bind(this)}>
  <input type="text" placeholder="que veux tu en todos?" ref="createInput" />
  <button>Create</button>
  </form>
    );
  }
  handleCreate(event) {
    event.preventDefault();
    
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value ='';
  }
}

