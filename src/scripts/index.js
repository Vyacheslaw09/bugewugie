// создание кнопки 'х - то то есть закрыть' и добавление ее к каждомуу новому событию
var mytodolist=document.getElementsByTagName("li"); // находим элементы с тегом "li"
var i;
// создаем условия переменной i
for (i = 0; i < mytodolist.length; i++) {
var span=document.createElement("SPAN"); // создание спец параметров для иконки Х
var txt=document.createTextNode("\u00D7"); // создание иконки Х
span.classname="close"; // функция закрыть
span.appendchild(txt);
mytodolist[i].appendChild(span); // как я понял это задать параметры определенной кнопке Х, если правильно написал код
}

// функция нажатия на кнопку Х чтобы завершить событие
var close = document.getElementsByClassName("close"); // т.о. получим доступ к кнопке Закрыть
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
var div = this.parentElement;
div.style.display = "none";
  }
}

// добавление зачеркнутого стиля при нажатии на событие из списка
var list = document.querySelector('ul');
// добавим строке снизу функции для клика, т.е. Тип события - клик, функция которая будет и фаза
list.addEventListener('click', function(ev) {
if (event.target.tagName === 'LI') { // если мы нажимаем на событие из списка
event.target.classlist.toggle('checked'); // то событие принимает стиль "зачеркнутый", но я могу изменить параметры, на то что цвет заверш. события на красный будет меняться
 }
}, true); // и если не нажать, то функция работать не будет

// создание нового события из списка при нажатии на кнопку add note
function newElement() {
var li = document.createElement("li");
var inputValue = document.getElementById("myInput").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue == '') {
alert("Enter text...");
  } else {
   document.getElementById("myUL").appendChild(li);
  }
 document.getElementById("myInput").value = "";

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
}