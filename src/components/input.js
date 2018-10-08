import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { newCard } from '../actions';

class Input extends Component {
  constructor(props){
    super(props)
  }

  state = { value: '' }

  handleKeyPress = (e) => {
    if (e.key === 'Enter'){
      this.props.newCard(e.target.value);
      this.setState({value: ''});
    }  
  }

  render(){
    return (
      <input 
      className="input-group new-todo"
      onKeyPress={event => this.handleKeyPress(event)}
      value={this.state.value}
      onChange={event => this.setState({value: event.target.value})} />
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ newCard }, dispatch); 

export default connect(null, mapDispatchToProps)(Input);
