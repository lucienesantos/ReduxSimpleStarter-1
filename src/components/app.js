import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCard } from '../actions';
import { deleteCard } from '../actions';
import TodoList from './todo_list';

class App extends Component {

  constructor(props) {
    super(props);
  }

  state = { selectedCard: {} } 

  deleteCard = () => {
    this.props.deleteCard(this.props.selectedCard.title);
  }
  // saveCard = () => {
  //   editedCard: 
  //   this.props.editCard();

  // }

  render () {
    const { selectedCard } = this.props;
    console.log(this.props);
    return (
      <div className="trello">
        <h1 className="header">Trello da Thienne </h1>
        <div className='d-flex-row'>
          <TodoList />
            {/* Exportar para componente */}

          <div className='details-box'>
            { this.props.selectedCard != null ? (
              <div className="selected-card-box">
                <div>
                  <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input id="title" type="text" className="form-control" defaultValue={this.props.selectedCard.title}></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input id="description" type="text" className="form-control" defaultValue={this.props.selectedCard.description}></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="responsable">Responsible:</label>
                    <input id="responsable" type="text" className="form-control" defaultValue={this.props.selectedCard.responsible}></input>
                  </div>
                </div>  
                <div className="d-row-reverse">
                  <button className="btn btn-danger" onClick={this.deleteCard}>Remover</button>
                  <button className="btn btn-edit mr-5 btn-primary" onClick={this.saveCard}>Salvar</button>
                </div>
              </div>  
            ) : 
            ( <div><h3>Card removido com sucesso!!!</h3></div> ) }
          </div>
        </div>
      </div>  
    )
  }
}

const mapStateToProps = state => ({
 selectedCard: state.cardListManager.selectedCard,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteCard }, dispatch);  


export default connect(mapStateToProps, mapDispatchToProps)(App);
