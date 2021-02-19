// Массив наших дел
var todos = []
function click('click'function(argument) {
	// body...
})
 {
    console.log('some')
}
/*
    Функция  которяа добавляет элемент к списку дел
*/
function newElement () {
	// создание элемента
	var li = document.createElement('li');
    // значение поля ввода, дело которое мы добавляем
    var inputValue = document.getElementById("myInput").value;
 var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Напишите сюда что-нибудь");
  } else {
   document.getElementById("myUL").appendChild(li);
  }
 document.getElementById("myInput").value = "";
    // добавляем наше дело в общий список (понадобиться для будующего)
    todos.push(input);
    // Выводим наш список в консоль (просто для проверки, консоль можно открыть нажав F12)
    console.log(todos);
    // элемент ul - где обертка списка
    var ul = document.getElementById("myUL");
    // создаем новый элемент для списка
    var li = document.createElement("li");
    // Добавляем текст нашему элементу списка li
    li.appendChild(document.createTextNode(inputValue));
    // пример для дополнительного задания
    // li.onclick = click;
    // добавляем кнопку ззакрыть
    var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
 span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
     var div = this.parentElement;
      div.style.display = "none";
    }
  }
    // Добавляем дело к нашему списку
    ul.appendChild(li);
}

// function click() {
//     alert('click')
// }

