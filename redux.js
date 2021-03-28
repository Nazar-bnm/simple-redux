const createStore = (reducer) => {
  let state = {
    count: 0
  };
  const listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);

    return unsudscribe = (listener) => {
      listeners.splice(listeners.indexOf(listener), 1);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    
    listeners.forEach((listener) => {
      listener();
    });
  };

  return {
    getState,
    subscribe,
    dispatch
  };
};
