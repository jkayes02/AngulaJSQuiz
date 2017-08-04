(function() {
    var app = angular.module("turtleFacts");
    resultsController.$inject = ['quizMetrics', 'dataService'];

    app.controller("resultsCtrl", resultsController);

    function resultsController(quizMetrics, dataService) {
        this.activeQuestion = 0;
        this.quizMetrics = quizMetrics;
        this.dataService = dataService;
        this.setActiveQuestion = function(index) {
            this.activeQuestion = index;
        }
    }
})();