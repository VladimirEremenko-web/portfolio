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
	// form placeholder
	const formItems = document.querySelectorAll('.form-field');
	
	for(let item of formItems){
		const thisParent = item.closest('.form-item');
		const thisPlaceholder = thisParent.querySelector('.fake-placeholder');
		// Если инпут в фокусе		
		item.addEventListener('focus', function(){
			thisPlaceholder.classList.add('active');
		});

		// Если инпут теряет фокус
		item.addEventListener('blur', function(){

			if(item.value.length > 0){
				thisPlaceholder.classList.add('active');
			}
			else{
				thisPlaceholder.classList.remove('active');
			}
		})
	}
	//FORM VALIDATE
	$('.contacts-form').validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			subject: {
				required: true
			},
			message: {
				required: true
			}
		},
		messages: {
			email: {
				required: 'Введите email',
				email: 'отсутсвует символ @'
			},
			subject: {
				required: 'Введите тему сообщения'
			},
			message: {
				required: 'Введите текст сообщения'
			}
		},
		submitHandler: function (form) {
			ajaxFormSubmit();
		}

	})
	// Функция AJAX запрса на сервер

	function ajaxFormSubmit() {

		let string = $(".contact-form").serialize(); // Соханяем данные введенные в форму в строку.

		//Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string

			// Функция если все прошло успешно
			success: function (html) {
				$(".contacts-form").slideUp(800);
				$('#answer').html(html);
			}
		});
		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false;
	}
	// Подключение боковых точек
	$('#page-nav').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
		begin: function () {},
		end: function () {},
		scrollChange: function ($currentListItem) {}
	});
	// Показать кнопку скролл вверх
	$('#backTop').hide();

	$(window).scroll(function(){
		if($(this).width() < 1200){
			if( $(this).scrollTop() > 800 ){
				$('#backTop').fadeIn();
			}
			else{
				$('#backTop').fadeOut();
			}
		}
	});
})