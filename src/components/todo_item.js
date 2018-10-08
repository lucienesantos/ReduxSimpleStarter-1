import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clickCard } from '../actions';

class TodoItem extends Component {
  constructor(props){
    super(props)
  }
  
  handleClick = (event) => {
    this.props.clickCard(event.target.innerText);
  }

  render(){
    return (
      <li
        onClick={event => this.handleClick(event)}
        className={`${this.props.isSelected ? 'selected' : ''} box`}
        key={this.props.card.title}>
        {this.props.card.title}
      </li>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickCard }, dispatch);  

/* <TodoItem {...props} clickCard={() => ({type, value})}/> */
export default connect(null, mapDispatchToProps)(TodoItem);
