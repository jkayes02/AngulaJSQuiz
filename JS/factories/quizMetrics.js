(function() {
    var app = angular.module("turtleFacts");
    quizMetrics.$inject = ['dataService'];
    
    app.factory("quizMetrics", quizMetrics);
    
    function quizMetrics(dataService) {
        var quizObj = {
            quizActive: false,
            resultsActive: false,
            correctAnswers: [],
            numCorrect: 0,
            changeState: function(metric) { 
                if(metric === "quiz") {
                    quizObj.quizActive = true;
                    quizObj.resultsActive = false; 
                }else if(metric === "results"){
                    quizObj.quizActive = false;
                    quizObj.resultsActive = true; 
                }else {
                    return false;
                }
            },
            markQuiz: function(){
                quizObj.correctAnswers = dataService.correctAnswers;
                for (var index = 0; index < dataService.questions.length; index++) {
                    if(dataService.questions[index].selected === dataService.correctAnswers[index]) {
                        dataService.questions[index].correct = true;
                        quizObj.numCorrect++;
                    }else {
                        dataService.questions[index].correct = false;
                    }
                    
                }
            }
        };
        
        return quizObj;
    }
})()   

 