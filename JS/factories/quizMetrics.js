(function() {
    var app = angular.module("turtleFacts");
    app.factory("quizMetrics", function() {
        var quizObj = {
            quizActive: false,
            changeState: function(state){ this.quizActive = state; }
        };
        
        return quizObj;
    });
    
})()   

 