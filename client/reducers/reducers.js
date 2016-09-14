var actions = require('../actions/actions');
var update = require('react-addons-update');

var initialState = {
	musicList:[]
}


var reducer = function (state, action) {
	state = state || initialState;
	
	if(action.type === actions.FETCH_DATA_SUCCESS) {
		console.log('success worked!', action);
		var newState = update(state, {
			musicList: {$set: action.data}
		});
		console.log('action fetchData', newState);
		return newState;


	}

	else if (action.type === actions.FETCH_DATA_ERROR) {
		console.log(action.error, 'error');
		return action.error;
	}

	return state;
}

module.exports = reducer;