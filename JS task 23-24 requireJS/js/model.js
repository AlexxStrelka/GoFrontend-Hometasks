define(
    'Model',

    ['jquery', 'template'], //зависимости 

    function( $, template ){// функция-фабрика, выполняется только после подключения зависимостей 
      

function Model() {
		var self = this;
		self.data = ["learn JS", "read book", "watch TV"];

		self.addItem = function(item){
			if (item.length === 0){
				return;
			};
			self.data.push(item);
				return self.data;
		};

		self.removeItem = function(item){
			var index = self.data.indexOf(item);
			if (index === -1){ //if not found
				return;
			};

		self.data.splice(index, 1);
				return self.data;
		};

		self.replaceItem = function(item, replacement){
			var index = self.data.indexOf(item);
			if (index === -1){ //if not found
				return;
			};
      
      self.data[index] = replacement;
      console.log(self.data); 
      //debugger;
			return self.data;

		};
};

		return Model;
    }
);
