let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("71");
let btn2 = document.getElementById("71");
let btn3 = document.getElementById("16");
let btn4 = document.getElementById("16");
let btn5 = document.getElementById("39");
let btn6 = document.getElementById("39");


btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("вы выбрали товар");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		item = "2";
		tg.MainButton.setText("вы выбрали товар");
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		item = "3";
		tg.MainButton.setText("вы выбрали товар");
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		item = "4";
		tg.MainButton.setText("вы выбрали товар");
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		item = "5";
		tg.MainButton.setText("вы выбрали товар");
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		item = "6";
		tg.MainButton.setText("вы выбрали товар");
		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});

let usercard = dosument.getElementById("usercard");

let p = document.createElement("p");

p.innerText = '${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}';

usercard.appendChild(p);
