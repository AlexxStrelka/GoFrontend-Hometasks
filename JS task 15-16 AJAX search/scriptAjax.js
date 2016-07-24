$(function() {




//Событие при нажатии кнопки Поиск или Enter (в обеих случаях срабатывает событие click)
$('#btn').click(function(e){
	e.preventDefault();

	//Очищаем предыдущие результаты поиска
	$('span').remove();

	var $searchInput = $('#searchId').val();

console.log( "value1= ", $searchInput );

	//Добавляем ключевое слово поиска к URL запроса
    var urlik = "http://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag="+ $searchInput + "&limit=10";

    console.log("URL = ", urlik);


	$.getJSON(urlik,
		
		function(data){
				 

		    $.each(data.results, function(i, val){

		    	var imageContainer = document.createElement("span");
		        var image = document.createElement("img");

		    	image.src = val.url;
		    	image.alt = val.tags[0];
		    			
		    	imageContainer.innerHTML = '<a href="'+val.itemurl+'" title="'+val.url+'" target="_blank">'+val.title+"</a>"; 
			    imageContainer.appendChild(image);

		    	$('#result').append(imageContainer);

		    });

		    
		    console.log("data", data.results);
		}


);
});



});