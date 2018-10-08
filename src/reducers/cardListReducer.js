import { NEW_CARD, SELECT_CARD, DELETE_CARD } from '../actions/actionTypes';

const initialState = { 
  list: [
    { title: "Change todo item to object", description: "Atualmente o todo_item é comente um text, deve mudar para um objeto para incluir outros campos além do título", responsable: "Thienne" },
    { title: "Add btn remove card", description: "Permitir remover/excluir um card", responsable: "Luciene" }
  ],
  selectedCard: { title: "Change todo item to object", description: "Atualmente o todo_item é comente um text, deve mudar para um objeto para incluir outros campos além do título", responsable: "Thienne" },
  // list: ["When click on the card", "Show details of the task", "Change card to objeto {title, description, status}", "In future change form to create Card"],
}

export const cardListReducer = (state = initialState, action ) => {
  console.log("Entrou no reducer ")
  switch (action.type){
    case NEW_CARD:
      return {
        ...state,
        list: [...state.list, action.newCardObject ],
        selectedCard: action.newCardObject
      }
    case SELECT_CARD:
      return {
        ...state,
        selectedCard: state.list.find((card) => { return card.title == action.selectedCard }),
      };  
    case DELETE_CARD:
      return {
        ...state,
        list: state.list.filter((card) => card.title != action.deletedCard),
        selectedCard: null
      };   
    default:
      return state
  }
}