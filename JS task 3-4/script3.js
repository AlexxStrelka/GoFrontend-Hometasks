var tagDiv;
var tagH3;
var tagOl;
var tagLi;
var tagForm;
var tagInput;
var tagButton;
var textVariant;

var counter = 1; //Счетчик для id в tagInput

var testTask = {
  title: 'Тест по программированию',
  docBody: document.body,
  
  createContainer: function () {
			alert("Start");
			tagDiv = document.createElement('div');
			tagDiv.classList.add('container');

			this.docBody.appendChild(tagDiv);

			console.log(tagDiv);
  },

createWrapper: function () {
			
			tagDiv = document.createElement('div');
			tagDiv.classList.add('wrapper');

			var container = document.querySelector('.container');
      container.appendChild(tagDiv);

      tagDiv.style.width = "600px";
      tagDiv.style.display = "block";
      tagDiv.style.margin = "auto";
			tagDiv.style.borderColor = "black";
			tagDiv.style.borderWidth = "2px";
			console.log(tagDiv);
  },

  createHeader: function (testTitle) {
    	tagH3 = document.createElement('h3');
      tagH3.innerHTML = testTitle;
      tagH3.style.textAlign = "center";

      var wrapper = document.querySelector('.wrapper');
      wrapper.appendChild(tagH3); 

      console.log(tagH3);
  },

  createOl: function () {
			tagOl = document.createElement('ol');
			tagOl.id = "list";

			var wrapper = document.querySelector('.wrapper');
      wrapper.appendChild(tagOl);

      tagOl.style.marginBottom = "30px";

			console.log(tagOl);
  },
	createLi: function (Question) {
			tagLi = document.createElement('li');
			tagLi.classList.add('liClass');

			var itemList = document.getElementById('list'); 
			itemList.appendChild(tagLi);

			tagLi.innerHTML = Question;
			tagLi.style.marginBottom = "20px";
			
			return tagLi;

		},

	createForm: function (parentLiContainer){
		var tagForm = document.createElement('form');
  	tagForm.classList.add('formClass');

  	parentLiContainer.appendChild(tagForm); //создаем чайлд в переданном родительском li

  	tagForm.setAttribute('action', '#');

  	return tagForm;
  },

  createInput: function (Variants, parentFormContainer){
  	var tagIdPrefix = 'input_' + counter;
  	// var tagIdPrefix = 'input_' + window.performance.now();
  	var tagInput = document.createElement('input');
  	tagInput.classList.add('inputClass');

  	// var tagForm = document.querySelector('.formClass');
  	parentFormContainer.appendChild(tagInput); //создаем чайлд в переданном родительском form

  	tagInput.setAttribute('type', 'checkbox');
  	tagInput.setAttribute('value', 'variant');
  	tagInput.setAttribute('id', tagIdPrefix);
  	tagInput.style.display = "block";
  	tagInput.style.float = "left";
  	
  	var tagLabel = document.createElement('label');

  	tagLabel.setAttribute('for', tagIdPrefix);
		tagLabel.innerHTML = Variants;
		tagLabel.style.display = "block";
  	tagLabel.style.marginLeft = '20px';
  	tagLabel.style.fontWeight = 'normal';
  	parentFormContainer.appendChild(tagLabel); //создаем чайлд в переданном родительском form
  	
  	counter++

	},

 createButton: function (buttonText){
 	var tagButton = document.createElement('button');
  tagButton.classList.add("btn");
  tagButton.classList.add("btn-default");
  tagButton.innerHTML = buttonText;
  tagButton.style.display = "block";
  tagButton.style.textAlign = "center";
  tagButton.style.margin = "auto";

  var wrapper = document.querySelector('.wrapper');
      wrapper.appendChild(tagButton); 

  console.log(tagButton);
	},

}

testTask.createContainer();
testTask.createWrapper();
testTask.createHeader("Тест по программированию");
testTask.createOl();
var listItem = testTask.createLi("Вопрос №1");
var formContainer = testTask.createForm(listItem);
testTask.createInput("Вариант ответа №1", formContainer);
testTask.createInput("Вариант ответа №2", formContainer);
testTask.createInput("Вариант ответа №3", formContainer);

var listItem = testTask.createLi("Вопрос №2");
var formContainer = testTask.createForm(listItem);
testTask.createInput("Вариант ответа №1", formContainer);
testTask.createInput("Вариант ответа №2", formContainer);
testTask.createInput("Вариант ответа №3", formContainer);

var listItem = testTask.createLi("Вопрос №3");
var formContainer = testTask.createForm(listItem);
testTask.createInput("Вариант ответа №1", formContainer);
testTask.createInput("Вариант ответа №2", formContainer);
testTask.createInput("Вариант ответа №3", formContainer);

testTask.createButton("Проверить мои результаты");



