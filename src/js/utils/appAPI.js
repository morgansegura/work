var AppActions = require('../actions/AppActions');

module.exports = {
    searchMovies: function(movie){
        var APIKey = 'tt3896198&apikey=b2a7c77a'
        $.ajax({
            url: 'http://www.omdbapi.com/?i=' + APIKey + '&'
            dataType: 'json',
            cache: false,
            success: function(){
                AppActions.receiveMovieResults(data.Search);
            }.bind(this),
            error: function(xhr, status, err){
                alert(err);
            }.bind(this)
        })
    }
}