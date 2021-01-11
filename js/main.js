$(document).ready(function () {
    //моб меню

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
	//-фильтрация проектов
    let containerEl = document.querySelector('#portfolio-projects');

    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        }
	});
	
	const filterToggles = document.querySelectorAll('.portfolio-menu-toggle button');
	const portfolioBigCards = document.querySelectorAll('.portfolio-content__item');

	for (let i = 0; i < filterToggles.length; i++) {
		filterToggles[i].addEventListener('click', function () {
			if (i == 0) {
				for (let j = 0; j < 2; j++) {
					portfolioBigCards[j].classList.add('portfolio-content__item--big')
				}
			} else {
				for (let j = 0; j < 2; j++) {
					portfolioBigCards[j].classList.remove('portfolio-content__item--big')
				}
			}
		});
	}
	// Паралакс движения за мышкой
	let prxScene = document.querySelector('.contacts')
	let prxItem = document.querySelectorAll('.move-quot');
	prxScene.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		for (let item of prxItem) {
			item.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
		}
	});
})