
var userNames = [];


for (var i = 0; i < 5; i++) {
  insertResult = prompt('Введите имя', 'Name');
  userNames.push( insertResult );
  console.log('array', userNames);
}

var authorization = prompt('Введите имя пользователя: ', 'Имя');

var i = 0;

while (i < userNames.length) {
  if (userNames[i] == authorization) {
  alert(authorization+' , вы успешно вошли');
  break;
  } else {
  	i++
  }
}

alert('Вашего имени нет в базе!');














 
