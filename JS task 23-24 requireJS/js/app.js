requirejs.config({
    paths:{
        // 'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
        'jquery': 'jquery-3.0.0',
        'template': 'template'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'template': {
            deps: ['jquery'],
            exports: 'template'
        }
    }
});

require(
	["jquery",
	"Model",
	"View",
    "Controller"],
	  

	function($, Model, View, Controller) {
		var firstToDolist = ["learn java", "watch TV", "listen music"];
        var model = new Model(firstToDolist);
        var view = new View(model);
        var controller= new Controller(model, view);
}
);




