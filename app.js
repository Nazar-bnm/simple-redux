(function() {
  const actionTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    SET_COUNT: 'SET_COUNT'
  };

  const incrementAction = () => ({ type: actionTypes.INCREMENT });
  const decrementAction = () => ({ type: actionTypes.DECREMENT });
  const setCountAction = (payload) => ({ type: actionTypes.SET_COUNT, payload });

  const initState = {
    count: 0
  };

  const reducer = (state = initState, action) => {
    if(action.type === actionTypes.INCREMENT) {
      return ({
        ...state,
        count: state.count + 1
      });
    }

    if(action.type === actionTypes.DECREMENT) {
      return ({
        ...state,
        count: state.count - 1
      });
    }

    if(action.type === actionTypes.SET_COUNT) {
      return ({
        ...state,
        count: action.payload
      });
    }
  };

  const store = createStore(reducer);

  document.querySelector('#demo-1 .increment')
    .addEventListener('click', () => store.dispatch(incrementAction()));

  document.querySelector('#demo-1 .decrement')
    .addEventListener('click', () => store.dispatch(decrementAction()));

  document.querySelector('#demo-1 .count-input')
    .addEventListener('change', (e) => store.dispatch(setCountAction(e.target.value)));

  store.subscribe(() => {
    const state = store.getState();
    document.querySelector('#demo-1 .count')
      .innerHTML = state ? state.count : 0;
  });
}) ();
