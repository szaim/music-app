var actions = require('../actions/actions');
var update = require('react-addons-update');

var initialState = {
	musicList:[],
	poster: "",
	title: ""
}


var reducer = function (state, action) {
	state = state || initialState;
	
	if(action.type === actions.FETCH_DATA_SUCCESS) {
		var newState = update(state, {
			musicList: {$set: action.data},
			poster: {$set: action.data[0].album.images[1].url},
			title: {$set: action.data[0].name}
		});
		return newState;


	}

	else if (action.type === actions.FETCH_DATA_ERROR) {
		return action.error;
	}
	//action reducer grabs data argument from fetchSelectedData dispatch and sets new poster value
	else if (action.type === actions.FETCH_DATA_SELECTED) {
		var newPoster = update(state, {
			poster: {$set: action.poster},
			title: {$set: action.title}
		});
		return newPoster;
	}
	return state;
}

module.exports = reducer;