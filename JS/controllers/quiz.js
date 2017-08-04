(function() {
    var app = angular.module("turtleFacts");

    quizController.$inject = ['quizMetrics', 'dataService'];
    app.controller("quizCtrl", quizController);


    function quizController(quizMetrics, dataService) {
        var questionsAnswered = 0;
        var quizLength = dataService.questions.length;

        this.quizMetrics = quizMetrics;
        this.dataService = dataService;
        this.activeQuestion = 0;
        this.error = false;

        this.selectAnswer = function(index) {
            dataService.questions[this.activeQuestion].selected = index;
        };
        this.setActiveQuestion = function(index) {
            if(index === undefined) { // Find next unanswered question:
                while(true) {
                    this.activeQuestion++;
                    if(this.activeQuestion >= quizLength) {
                        this.activeQuestion = quizLength - 1;
                        this.error = true;
                        break;
                    }
                    if(dataService.questions[this.activeQuestion].selected === null) { // If question has NOT been answered:
                        break;
                    }
                }
            }
            else {
                this.activeQuestion = index;
            } 
        };
        this.questionAnswered = function() {
            if(dataService.questions[this.activeQuestion].selected !== null) {
                questionsAnswered++;
                if(questionsAnswered >= quizLength) {
                    for (var index = 0; index < quizLength; index++) {
                       if(dataService.questions[index].selected === null) {
                           setActiveQuestion(index);
                           return;
                       } 
                    }
                    // All questions answered:
                    this.error = false;
                    this.finalise = true;
                    this.finaliseAnswers();
                    return;
                }
                this.setActiveQuestion(); // Find next unanswered question.
            }
        };
        this.finaliseAnswers = function() {
            this.finalise = false;
            questionsAnswered = 0;
            this.activeQuestion = 0;
            quizMetrics.markQuiz();
            quizMetrics.changeState("results");
        };
    };
    
})();