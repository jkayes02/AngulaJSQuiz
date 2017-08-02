(function() {
    var app = angular.module("turtleFacts");

    app.controller("quizCtrl", quizController);

    function quizController(quizMetrics, dataService) {
        this.quizMetrics = quizMetrics;
        this.dataService = dataService;
        this.activeQuestion = 0;
    };
    quizController.$inject = ['quizMetrics', 'dataService'];
})();