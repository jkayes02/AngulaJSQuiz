(function() {
    var app = angular.module("turtleFacts");
    listController.$inject = ['quizMetrics', 'dataService'];

    app.controller("listCtrl", listController);

    function listController(quizMetrics, dataService) {
        this.activeTurtle = {};
        this.search = "";
        this.quizMetrics = quizMetrics;
        this.turtleData = dataService.turtleData;

        this.changeActiveTurtle = function(index) {
            this.activeTurtle = index;
        };
        this.activateQuiz = function() {
            this.quizMetrics.changeState(true);
        };

    }
})();