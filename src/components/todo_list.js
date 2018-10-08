import React, { Component } from 'react';
import TodoItem from './todo_item';
import Input from './input';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TodoList extends Component{
  constructor(props){
    super(props)
  }

  todoList = () => {
    return this.props.list.map((element) => {
      return <TodoItem key={element.title} card={element} isSelected={this.props.selectedCard != null && element.title == this.props.selectedCard.title } />
    });
  }

  render() {

    return (
      <div>
        <Input />
        <ul> {this.props.list ? this.todoList() : null} </ul> 
      </div>   
    )
  }
}

const mapStateToProps = state => ({
  selectedCard: state.cardListManager.selectedCard,
  list: state.cardListManager.list
});

export default connect(mapStateToProps)(TodoList);