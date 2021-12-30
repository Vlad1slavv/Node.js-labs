// Лабораторная №2
let Imax, Imin

// Задание №1

function FirstExercise(){
	alert("Задание №1 Поменять местами абзаци 2 и 6.")
		let a = document.getElementById("Two"),
		b = document.getElementById("Six"),
		c = ""
	c = a.textContent
	a.innerHTML = b.textContent
	b.innerHTML = c;
}


// Задание №2

function SecondExercise(){
	function RombSquer(a,h) {
		let res = a*h;
		return res
	}
	document.getElementById("Five").innerHTML += ` Площадь ромба с высотой 5 и стороной 5: ${RombSquer(5,5)}`
}


// Задание №3

function ThirdExercise(){
	document.getElementById("Five").innerHTML = ""
	document.getElementById("BtnI").style.display = "inline";
	document.getElementById("invise3").style.display = "inline";
}

function SUM(){
	let Ishki = [];
	let i0 = document.getElementsByTagName("input")[1].value;
	let i1 = document.getElementsByTagName("input")[2].value;
	let i2 = document.getElementsByTagName("input")[3].value;
	let i3 = document.getElementsByTagName("input")[4].value;
	let i4 = document.getElementsByTagName("input")[5].value;
	let i5 = document.getElementsByTagName("input")[6].value;
	let i6 = document.getElementsByTagName("input")[7].value;
	let i7 = document.getElementsByTagName("input")[8].value;
	let i8 = document.getElementsByTagName("input")[9].value;
	let i9 = document.getElementsByTagName("input")[10].value;
	Ishki.push(i0,i1,i2,i3,i4,i5,i6,i7,i8,i9)
	Ishki.max = function (array) {
		return Math.max.apply(Math, array);
	}
	Ishki.min = function (array) {
		return Math.min.apply(Math, array);
	}
	Imax = Ishki.max(Ishki)
	Imin = Ishki.min(Ishki)
	document.cookie = `Imax = ${Imax}`
	document.cookie = `Imin = ${Imin}`
	alert(`Минимально веденное значение = ${Imin} Максимальное введенное значение = ${Imax}`)
}
if (Imax != null && Imin != null) {
	alert(`На этой странице сохранены значения MAX = ${readCookie("Imax")} и MIN = ${readCookie("Imin")}, через cookie`)
}

// Задание №5

function FiveExercise(){
	document.getElementById("Five").innerHTML = ""
	document.getElementById("One").innerHTML = ""
	document.getElementById("Weve").style.display = "inline"
	document.getElementById("Img_doroga").style.display = "none"}

	// function runFifthExercise() {
	// 	let h1 = document.querySelector('h1'),
	// 		p = document.createElement('p'),
	// 		div = document.createElement('div'),
	// 		btnAdd = document.createElement('button'),
	// 		btnLimit = document.createElement('p'),
	// 		btnSave = document.createElement('button');
	//
	//
	// 	h1.addEventListener('click', () => {
	// 		content4p.remove();
	// 		clearContent5();
	// 		content4.style.display = 'flex';
	// 		content4.style.flexWrap = 'wrap';
	// 		content5.appendChild(div);
	// 		div.style.display = 'flex';
	// 		div.style.justifyContent = 'center';
	// 		div.style.alignItems = 'center';
	// 		div.style.height = '40%';
	// 		div.appendChild(btnAdd);
	// 		btnAdd.textContent = 'Дадати зображення';
	// 		div.appendChild(btnLimit);
	// 		btnLimit.textContent = `Ще можна додати ${9 - content4.children.length} зображень`;
	// 		div.appendChild(btnSave);
	// 		btnSave.textContent = 'Зберегти';
	//
	//
	// 		const srcs = localStorage.getItem('srcs').split(',');
	// 		for (let i = 0; i < +localStorage.getItem('imgs'); i++) {
	//
	// 			displayImg(srcs[i]);
	// 			displayDeleteBtns();
	//
	// 		}
	//
	// 		checkImgLimit();
	// 	});
	//
	// 	btnAdd.addEventListener('click', () => {
	// 		displayImg(`http://placekitten.com/g/1${rnd()}/1${rnd()}`);
	// 		checkImgLimit();
	// 		displayDeleteBtns();
	// 	});
	// }









// BlackBox


