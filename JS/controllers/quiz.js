(function() {
    var app = angular.module("turtleFacts");

    app.controller("quizCtrl", quizController);


    function quizController(quizMetrics, dataService) {
        var questionsAnswered = 0;
        var quizLength = dataService.questions.length;

        this.quizMetrics = quizMetrics;
        this.dataService = dataService;
        this.activeQuestion = 0;
        this.setActiveQuestion = function() {
            while(true) {
                this.activeQuestion++;
                if(this.activeQuestion >= quizLength) {
                    this.activeQuestion = 0;
                    break;
                }
                if(dataService.questions[this.activeQuestion].selected === null) { // If question has NOT been answered:
                    break;
                }
            }
            
        };
        this.questionAnswered = function() {
            if(dataService.questions[this.activeQuestion].selected !== null) {
                questionsAnswered++;
                if(questionsAnswered >= quizLength) {

                }
            }
            this.setActiveQuestion();
        };
    };
    quizController.$inject = ['quizMetrics', 'dataService'];
})();