(function() {
    var app = angular.module("turtleFacts");

    app.controller("quizCtrl", quizController);

    function quizController(quizMetrics, dataService) {
        this.quizMetrics = quizMetrics;
    };
    quizController.$inject = ['quizMectrics', 'dataService'];
})();