// 1. Поиск элементов и изменение содержимого:
// Создайте HTML-документ с элементами: заголовок ( <h1> ), абзац текста
// ( <p> ), список ( <ul>  с элементами  <li> ).
// Подсказка: Используйте метод  document.querySelector()  для поиска
// заголовка и измените его текст с помощью свойства  .innerText .
// Найдите все элементы списка с помощью  document.querySelectorAll()  и
// добавьте к их тексту порядковый номер с помощью цикла.

const h1 = document.querySelector("h1");
console.log(`было: ${h1.innerHTML}`);
h1.innerText = "Новый заголовок";
console.log(`стало: ${h1.innerHTML}`);

const liArr = document.querySelectorAll("li");
for (let i = 0; i < liArr.length; i++) {
  liArr[i].innerText = `${i + 1} ${liArr[i].innerText}`;
}

// 2. Редактирование атрибутов:
// Добавьте на страницу изображение с атрибутом  src .
// Подсказка: Для изменения атрибутов используйте метод  .setAttribute() .
// Например, измените  src  у изображения на новый URL.
// Добавьте ссылку с атрибутом  href , и через JS поменяйте её текст и URL с
// помощью  setAttribute()  и свойства  .innerHTML .

const pict = document.querySelector("img");
pict.setAttribute(
  "src",
  "https://image.pngaaa.com/165/4253165-middle.png"
);

const link = document.querySelector("a");
link.innerHTML = '<a href="https://ya.ru">Яндекс.ру</a>';


// 3. Манипуляции с элементами:
// Создайте кнопку на странице. При нажатии на неё с помощью JavaScript
// добавляйте новый элемент списка в ранее созданный  <ul> .
// Подсказка: Для добавления элемента используйте методы  createElement()  и appendChild() .
// Добавьте ещё одну кнопку, которая будет удалять последний элемент
// списка. Для удаления используйте метод  .removeChild() .


const btmAdd = document.querySelector("#add-item");
const btmDel = document.querySelector("#remove-item");

btmAdd.onclick = function () {
  const newLi = document.createElement("li");
  newLi.innerText = `${
    document.querySelectorAll("li").length + 1
  } элемент списка`;
  document.querySelector("ul").appendChild(newLi);
};

btmDel.onclick = function () {
  const list = document.querySelector("ul");
  list.removeChild(list.lastElementChild);
};

// 4. Манипуляции со стилями CSS:
// Добавьте к абзацу текста стиль через CSS (например, цвет текста, размер шрифта).
// Подсказка: Для изменения стилей через JavaScript используйте свойство
// element.style . Например,  element.style.color = 'blue'; .
// Напишите JavaScript, который по нажатию на кнопку изменяет цвет текста абзаца на другой.
// Добавьте кнопку, которая будет скрывать или показывать абзац при каждом
// нажатии (используйте свойство  display ).


const btmCol = document.querySelector("#change-color");
const btmTogl = document.querySelector("#toggle-paragraph");

btmCol.onclick = () => document.querySelector("p").style.color = 'yellow';

btmTogl.onclick = function (){
    const p = document.querySelector("p");
    p.style.display = p.style.display === 'none' ? 'inline' : 'none'; 
}

// 5. Работа с геометрией элементов:
// Используя метод  getBoundingClientRect() , определите координаты и размеры
// любого элемента на странице.
// Подсказка: Выведите размеры элемента с помощью  console.log() , чтобы
// отладить и увидеть результат.
// Добавьте кнопку, которая будет выводить на экран ширину и высоту
// выбранного элемента, обновляя их при каждом нажатии.


const btmDiv = document.querySelector("div");
const rect = btmDiv.getBoundingClientRect();
console.log(rect);

//Как сделать так, чтобы выводился размер произвольно-выбранного элемента страницы, не понял
//Сделал только вывод размера элемента div,
//Но он меняется при изменении размеров окна браузера


btmDiv.onclick = () => alert(`Ширина элемента ${rect.width}, Высота ${rect.height}`);

//Совет: Не забудьте протестировать свои решения в консоли разработчика, чтобы
//убедиться, что код работает корректно!
