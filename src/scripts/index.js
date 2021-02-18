// Массив наших дел
var todos = []
function click() {
    console.log('some')
}
/*
    Функция  которяа добавляет элемент к списку дел
*/
function newElement () {
    // значение поля ввода, дело которое мы добавляем
    var input = document.getElementById("myInput").value;
    // добавляем наше дело в общий список (понадобиться для будующего)
    todos.push(input);
    // Выводим наш список в консоль (просто для проверки, консоль можно открыть нажав F12)
    console.log(todos);
    // элемент ul - где обертка списка
    var ul = document.getElementById("myUL");
    // создаем новый элемент для списка
    var li = document.createElement("li");
    // Добавляем текст нашему элементу списка li
    li.appendChild(document. createTextNode(input));
    // пример для дополнительного задания
    // li.onclick = click;
    //
    // Добавляем дело к нашему списку
    ul.appendChild(li);
}

// function click() {
//     alert('click')
// }

