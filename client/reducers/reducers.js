var actions = require('../actions/actions');
var update = require('react-addons-update');

var initialState = {
	musicList:[],
	//added poster property to fix selected dispatch action error (react error: needed poster property to recognize action event)
	poster: ""
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
	//action reducer grabs data argument from fetchSelectedData dispatch and sets new poster value
	else if (action.type === actions.FETCH_DATA_SELECTED) {
		var newPoster = update(state, {
			poster: {$set: action.poster}
		});
		console.log('new poster', newPoster);
		return newPoster
	}
	return state;
}

module.exports = reducer;