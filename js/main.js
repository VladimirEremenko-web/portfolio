const toggleMenu = document.querySelector('.toggle-menu'); //иконка гамбургер
const mobMenu = document.querySelector('.mobile-menu'); //mob menu
const overlay = document.querySelector('#overlay'); //overlay
const bodyEl = document.body;


//прослушиваем событие клик по гамбургеру
toggleMenu.addEventListener('click', function(){
	
	this.classList.toggle('active'); //  переключаем класс active  у гамбургера
	mobMenu.classList.toggle('active');
	overlay.classList.toggle('active');
	bodyEl.classList.toggle('noscroll');
});
//прослушиваем событие клик по моб меню
mobMenu.addEventListener('click', function(){
	this.classList.remove('active');
	toggleMenu.classList.remove('active');
	overlay.classList.remove('active');
	bodyEl.classList.remove('noscroll');
});
//прослушиваем событие клик по overlay
overlay.addEventListener('click', function(){
	this.classList.remove('active');
	toggleMenu.classList.remove('active');
	overlay.classList.remove('active');
	bodyEl.classList.remove('noscroll');
});