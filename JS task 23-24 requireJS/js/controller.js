define(
    'Controller',

    ['jquery', 'template', 'View', 'Model'], //зависимости 

    function( $, template ){// функция-фабрика, выполняется только после подключения зависимостей

			function Controller(model, view) {
				var self = this;

				view.elements.addBtn.on("click"||, addItem); //click on button to add item
				view.elements.listContainer.on("click", '.item-delete', removeItem);//click to delete
				view.elements.listContainer.on("dblclick", '.edit', editItem); //double-click to edit

				function addItem() {
					//debugger
					var newItem = view.elements.input.val();

					model.addItem(newItem);
					view.renderList(model.data);
					view.elements.input.val('');
				};

				function removeItem() {
					var item = $(this).attr('data-value');

					model.removeItem(item);
					view.renderList(model.data);
				};

				function editItem() {
					var item = $(this).attr('data-value');
					view.renderList(model.data);//сбросить фокус, если выделены другие элементы
					view.editList(model.data, item);// передача изменения вида на View
					
				};

			};
			return Controller;
	}
);


