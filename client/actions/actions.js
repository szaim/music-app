require('isomorphic-fetch');

var FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
var fetchDataSuccess = function(data) {
	return {
		type: FETCH_DATA_SUCCESS,
		data: data
	}
};

var FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
var fetchDataError = function(error) {
	return {
		type: FETCH_DATA_ERROR,
		error: error
	}
};

var FETCH_DATA_SELECTED = 'FETCH_DATA_SELECTED';
var fetchDataSelected = function(poster, title, song) {
  return {
    type: FETCH_DATA_SELECTED,
    poster: poster,
    title: title
  }
};



var fetchData = function(query) {
   return function(dispatch) {
       var url = 'http://localhost:8080/api/?q=' + query ;
       return fetch(url).then(function(response) {
           if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText);
               error.response = response;
               throw error;
           }
           return response.json();
       })

       .then(function(data) {
               console.log("DATA", data.tracks.items);
           return dispatch(
               fetchDataSuccess(data.tracks.items)
           );
       })
       .catch(function(error) {

           return dispatch(
               fetchDataSuccess(error)
           );
       });
   }
};

exports.fetchData = fetchData;
exports.FETCH_DATA_SUCCESS = FETCH_DATA_SUCCESS;
exports.fetchDataSuccess = fetchDataSuccess;
exports.FETCH_DATA_SELECTED = FETCH_DATA_SELECTED;
exports.fetchDataSelected = fetchDataSelected;
exports.FETCH_DATA_ERROR = FETCH_DATA_ERROR;
exports.fetchDataError = fetchDataError;


// const searchTrack = function(query) {
//     console.log('SEARCH TRACK');
//     let url = 'https://api.spotify.com/v1/search?q=' + query + '*&type=track';
//     return fetch(url)
//     .then(function(response) {
// //         return response.json()
// //     }).then(function(json) {
// //         return json.tracks;
// //     })
// //     .catch(function(err) {
// //         console.log('ERR' + err);
// //     });
// // };

// export default searchTrack;