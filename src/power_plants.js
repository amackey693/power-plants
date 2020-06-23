// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };
// const changePlantState = (plant, property) => {
//   return {
//     ...plant,
//     [property]: (plant[property] || 0) + 1
//   }
// }

let plant = {water: 0, soil: 0, light:0}

// This is a function factory which can create more specific functions to alter a plant's soil, water & light. We can also use it to change the state on many different 'props' (properties) throughout our application.
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
    ...state, 
    [prop]: (state[prop] || 0) + value
   })
  }
}

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateChanger = storeState();

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");