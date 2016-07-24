define(
    'View',

    ['jquery', 'template','Model'], //зависимости 

    function( $, template ){// функция-фабрика, выполняется только после подключения зависимостей 
        
        function View(model) {
            var self = this;

            function init(){
                    var wrapper = tmpl($("#wrapper-template").html());

                    $('body').append(wrapper);

                    self.elements = {
                        input: $('.item-value'),
                        addBtn: $('.item-add'),
                        listContainer: $('.item-list'),
                    };
                    self.renderList(model.data);
                    };
                
            self.renderList = function (data) {
                
                    var list = tmpl($('#list-template').html(), {data: data});
                        
                    self.elements.listContainer.html(list);
             };

            init();

            // debugger;

            self.editList = function (data, item) {
                    var index = data.indexOf(item);
                    var oldText = item;
                    var editable = $('.edit');
                    var newText;
                    editable.blur();
                    $(editable[index]).html("<form><input type=\"text\" class=\"editBox\" placeholder=\"" + oldText + "\" />   <button class=\"editBtn\">Edit</button></form>");
                    
                    $(".editBtn").on("click", function(e) {
                            e.preventDefault();
                            var newText = $('.editBox').val();
                            console.log("newText", newText);
                            
                            model.replaceItem(oldText, newText);
                            self.renderList(model.data);
                    });
            };

        };
        return View;

        }
);