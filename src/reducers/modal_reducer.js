export default function(state = {}, action) {
  switch (action.type) {
    case 'showWinModal':
      return { ...state, currentModal: 'GAME_OVER' };
    case 'hideModal ':
      return { ...state, currentModal: null };
    default:
      return state;
  }
}
