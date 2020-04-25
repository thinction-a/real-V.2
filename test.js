// const btn = document.querySelectorAll('.btn');
// const selected = document.querySelectorAll('.selected')


// const btnFunc = btn.addEventListener("click", click, false);

// function click(){
//     btnFunc.classList.add('selected');
//     if (this.style.background = 'none') {
//     this.style.background = '#58ccff';
//     this.style.color = '#fff';
//     }
// };

// function reClick(){
//     selected.addEventListener("click", reClick, false);
//     selected.classList.remove('selected');
//     if (this.style.background = '#58ccff') {
//     this.style.background = 'none';
//     this.style.color = '#58ccff';
//     }
// };

// click();
// reClick();

// const btn = document.querySelector(".btn");

// const BASE_COLOR = "#e5e5e5";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     const currentColor = btn.style.color;
//     if (currentColor === BASE_COLOR){
//     	btn.style.color = OTHER_COLOR;
//     }
//     if (currentColor === OTHER_COLOR)
//     {
//     	btn.style.color = BASE_COLOR;
//     }
// }

// function init(){
// 	btn.style.color = BASE_COLOR;
// 	btn.addEventListener("click", handleClick);
// }
// init();

// const title = document.querySelectorAll(".btn");
// const btn = Object.values(title);
// console.log(btn);
// const CLICKED = 'clicked'

// function selected() {
//     btn.classList.toggle(CLICKED)
// };

// selected();

// const btnClass = function() {
//     for (let i = 0; i < btn.length; i++) {
//         btn[];
//     }
//     console.log(btn[i])
// }
// btnClass();


// const title = document.querySelectorAll('.btn')
// const CLICKED_CLASS = "clicked";

// // console.log(btn)

// // toggle : 클래스가 있는지 체크하고, 있으면 remove, 없으면 add함.
// function handleClick(){
//     for (let i = 0; i < title.length; i++) {
//     title[i].classList.toggle(CLICKED_CLASS);
//     }
//     return title = new Array [title+i];
// }
// handleClick()

// function init(){
//     title[0, 1, 2].addEventListener("click", handleClick);
// }
// init();

// const title = document.querySelector(".btn");

// const BASE_COLOR = "#34495e";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR){
//     	title.style.color = OTHER_COLOR;
//     } else {
//     	title.style.color = BASE_COLOR;
//     }
// }

// function init(){
// 	title.style.color = BASE_COLOR;
// 	title.addEventListener("click", handleClick);
// }
// init();

// function CLICKED1() {
//     btn1 = document.querySelector('.btn1')
//     if (btn1.style.background === 'none') {
//         btn1.style.color = '#fff'
//         btn1.style.background = '#58ccff'
//     } else {
//         btn1.style.color = '#58ccff'
//         btn1.style.background = 'none'
//     }
// }
// function CLICKED2() {
//     btn2 = document.querySelector('.btn2')
//     if (btn2.style.background === 'none') {
//         btn2.style.color = '#fff'
//         btn2.style.background = '#58ccff'
//     } else {
//         btn2.style.color = '#58ccff'
//         btn2.style.background = 'none'
//     }
// }
// function CLICKED3() {
//     btn3 = document.querySelector('.btn3')
//     if (btn3.style.background === 'none') {
//         btn3.style.color = '#fff'
//         btn3.style.background = '#58ccff'
//     } else {
//         btn3.style.color = '#58ccff'
//         btn3.style.background = 'none'
//     }
// }
// function CLICKED4() {
//     btn4 = document.querySelector('.btn4')
//     if (btn4.style.background === 'none') {
//         btn4.style.color = '#fff'
//         btn4.style.background = '#58ccff'
//     } else {
//         btn4.style.color = '#58ccff'
//         btn4.style.background = 'none'
//     }
// }

// const btn = document.querySelectorAll('.btn');
// const btnArray = Object.values(btn);

// function btnArrayNew() {
//     for (let i = 0; i < btnArray.length; i++) {
//         btnArray[i] = '.btn' + i;
//         // btnArray[i].classList.add('btn' + i)
//     }
//     return btnArray;
// }

// console.log(btnArray[0])
// console.log(btnArray[1])

// console.log(btnArray)


// const button = document.getElementsByClassName('btn');
// const buttonArr = Object.values(button)
// console.log(buttonArr, typeof buttonArr)

// console.log(buttonArr.indexOf(button[1]));


// function testing() {
//     for (let i = 0; i < button.length; i++) {
//         button[i].classList.add('btn' + i)
//     }
// }

// testing()

// console.log(button[0])
// console.log(buttonArr[0])

// function testing2() {
//         this.classList.toggle('clicked')
// }


// console.log(button)
// console.log(button[0])
// console.log(button[1])
// console.log(button[2])
// console.log(button[3])
// console.log(testing2)

// function init(){
//     for (let i = 0; i < button.length; i++) {
//     button[i].addEventListener("click", testing2);
//     }
// }
// init();


// SWIPE BUTTON //
const recent = document.querySelector('.recent');
const popular = document.querySelector('.popular');
const buttons = document.querySelectorAll('.button--wrapper>button')
console.log(buttons)

const _buttons = Object.values(buttons);
console.log(_buttons)

function colored() {
    recent.addEventListener('click', function() {
        recent.classList.add('focused');
        popular.classList.remove('focused');
    })
    popular.addEventListener('click', function() {
        popular.classList.add('focused');
        recent.classList.remove('focused');
    })
}

function focused() {
    for (let i = 0; i < _buttons.length; i++) {
        _buttons[i].addEventListener("click", colored);   
    }
}

focused()

const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
console.log(a, typeof a)

const b = a.filter(word => word%2 === 0)

console.log(b, b.length)