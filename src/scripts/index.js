function close(){
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
}

close();
// функция нажатия на кнопку Х чтобы завершить событие
var close = document.getElementsByClassName("close"); // т.о. получим доступ к кнопке Закрыть
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
var div = this.parentElement;
div.style.display = "none";
  }
}

// создание нового события из списка при нажатии на кнопку add note
function newElement() {
var li = document.createElement("li");
var inputValue = document.getElementById("myInput").value;
var t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue == '') {
alert("Введите текст");
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