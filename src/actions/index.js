import { SELECT_CARD } from './actionTypes';
import { NEW_CARD } from './actionTypes';
import { DELETE_CARD } from './actionTypes';

//Action creator que retorn a action e o card selecionado
export const clickCard = cardSelected => ({
  type: SELECT_CARD, // actions
  selectedCard: cardSelected
})

export const newCard = value =>({
  type: NEW_CARD,
  newCardObject: {title: value, description: '', responsible: ''}
})

export const deleteCard = value =>({
  type: DELETE_CARD,
  deletedCard: value
})
