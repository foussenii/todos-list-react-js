import React from 'react';

export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEiting: false
      
    };
  }
  renderActionsSection() {
    if (this.state.isEiting) {
      return(
        <td>
        <button>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
          </td>
      );
    }
    
    return (
      <td> <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button>supprime</button>
        </td>
    );
  }
  
  
  render() {
    return(
      
      <tr>
    <td> {this.props.task}</td>
    {this.renderActionsSection()}
      </tr>
      
    );
  }
  onEditClick() {
    this.setState({ isEditing: true});
  }
  onCancelClick() {
    this.setState({ isEditing: false});
  }
}