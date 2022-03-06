// import { TODO_ACTIONS } from './actions';

// function reducer(state, action) {
//   switch (action.type) {
//     case TODO_ACTIONS.ADD_TASK: {
//       const newState = {
//         active: [...state.active, action.taskName],
//         completed: state.completed,
//       };
//       action.storeInDatabase(newState);
//       return newState
//     }
//     case TODO_ACTIONS.CHECK_TASK: {
//       const newState = {
//         active: action.isChecked
//           ? state.active.filter((task) => task !== action.taskName)
//           : [...state.active, action.taskName],
//         completed: action.isChecked
//           ? [...state.completed, action.taskName]
//           : state.completed.filter((task) => task !== action.taskName),
//       };
//       action.storeInDatabase(newState);
//       return newState;
//     }
//     case TODO_ACTIONS.REMOVE_TASK: {     
//       const newState = {
//         active: state.active.filter((task) => task !== action.taskName),
//         completed: state.completed.filter((task) => task !== action.taskName),
//       };
//       action.storeInDatabase(newState);
//       return newState;
//     }
//     case TODO_ACTIONS.SET_TASKS:
//       return {
//         active: action.tasksList.active ?? [],
//         completed: action.tasksList.completed ?? []
//       }
//     default:
//       return state;
//   }
// }

// export default reducer;