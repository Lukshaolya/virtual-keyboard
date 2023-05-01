const data =[{code:'Backquote',
		enKey: '`',
		ruKey: 	'`'},
	{code:'Digit1',
	enKey: 1,
	ruKey: 	1},{
	code:'Digit2',
	enKey: 2,
	ruKey: 	2},{
	code:'Digit3',
	enKey: 3,
	ruKey: 	3},{
	code:'Digit4',
	enKey: 4,
	ruKey: 	4},{
	code:'Digit5',
	enKey: 5,
	ruKey: 	5},{
	code:'Digit6',
	enKey: 6,
	ruKey: 	6},{
	code:'Digit7',
	enKey: 7,
	ruKey: 	7},{
	code:'Digit8',
	enKey: 8,
	ruKey: 	8},{
	code:'Digit9',
	enKey: 9,
	ruKey: 	9},
	{
		code:'Digit0',
		enKey: 0,
		ruKey: 	0},
	{
	code:' Minus',
	enKey: '-' ,
	ruKey: 	'- '},
	{
	code: 'Equal',
	enKey: '=' ,
	ruKey: 	'=' },
{
	code: 'Backspace',
	enKey: 'Backspace',
	ruKey: 	'Backspace',
	addishinalClass: 'backspace_key'},
	{code:'Tab',
	enKey: 'Tab',
	ruKey: 	'Tab',
	addishinalClass: 'tab_key'},
	{code:'KeyQ',
	enKey: 'q',
	ruKey: 	'ц'},
	{code:'KeyW',
	enKey: 'w',
	ruKey: 'ц'},
	{code:'KeyE',
	enKey: 'e',
	ruKey: 	'у'},
	{code:'KeyR',
	enKey: 'r',
	ruKey: 	'к'},
{code:'KeyT',
	enKey: 't',
	ruKey: 	'е'},
{code:'KeyY',
	enKey: 'y',
	ruKey: 	'н'},
{code:'KeyU',
	enKey: 'u',
	ruKey: 	'г'},
{code:'KeyI',
	enKey: 'i',
	ruKey: 'ш'},
{code:'KeyO',
	enKey:' o',
	ruKey: 	'щ'},
{code:'KeyP',
	enKey: 'p',
	ruKey: 	'з'},
{code:'BracketLeft',
	enKey: '[',
	ruKey: 	'х'},
{code:'BracketRight',
	enKey: ']',
	ruKey: 	'ъ'},
	{code:'Delete',
	enKey: 'Del',
	ruKey: 	'Del',
	addishinalClass: 'del_key'
	},
{code:'CapsLock',
	enKey: 'CapsLock',
	ruKey: 	'CapsLock',
	addishinalClass: 'caps_lock_key'
},
{code:'KeyA',
	enKey: 'a',
	ruKey: 	'ф'},
{code:'KeyS',
	enKey: 's',
	ruKey: 	'ы'},
{code:'KeyD',
	enKey: 'd',
	ruKey: 	'в'},
{code:'KeyF',
	enKey: 'f',
	ruKey: 	'а'},
{code:'KeyG',
	enKey: 'g',
	ruKey: 	'п'},
{code:'KeyH',
	enKey: 'h',
	ruKey: 	'р'},
{code:'KeyJ',
	enKey: 'j',
	ruKey: 	'о'},
{code:'KeyK',
	enKey: 'k',
	ruKey: 	'л'},
{code:'KeyL',
	enKey: 'l',
	ruKey: 	'д'},
{code:'Semicolon',
	enKey: ';',
	ruKey: 	'ж'},
{code:'Quote',
	enKey: '',
	ruKey: 	'э'},

{code:'Enter',
	enKey: 'Enter',
	ruKey: 'Enter',
addishinalClass: 'enter_key'},
{code:'ShiftLeft',
	enKey:'Shift',
	ruKey: 	'Shift',
addishinalClass: 'shift_key'},
{code:'KeyZ',
	enKey:'z',
	ruKey: 'я'	},
{code:'KeyX',
	enKey:'x',
	ruKey:'ч' 	},
{code:'KeyC',
	enKey:'c',
	ruKey: 	'с'},
{code:'KeyV',
	enKey:'v',
	ruKey: 'м'	},
{code:'KeyB',
	enKey:'b',
	ruKey:' и'	},
{code:'KeyN',
	enKey:'n',
	ruKey: 	'т'},
{code:'KeyM',
	enKey:'m',
	ruKey: 'ь'	},
{code:'Comma',
	enKey:',',
	ruKey: 'б'	},
{code:'Period',
	enKey:'.',
	ruKey: 	'ю'},
{code:'Slash',
	enKey:'?',
	ruKey: '.'},
	{code:'ArrowUp',
	enKey:'Up',
	ruKey: 'Up'	},
{code:'ShiftRight',
	enKey:'Shift',
	ruKey: 'Shift',
	addishinalClass: 'shift_key'	},
	{code:'ControlLeft',
	enKey:'Ctrl',
	ruKey: 'Ctrl'	},
{code:'MetaLeft',
	enKey:'Win',
	ruKey: 'Win'	},
{code:'AltLeft',
	enKey:'Alt',
	ruKey:'Alt'},
{code:'Space',
	enKey:' ',
	ruKey:' ' ,
addishinalClass: 'space_key'	},
{code:'AltRight',
	enKey:'Alt',
	ruKey: 'Alt'	},

{code:'ArrowLeft',
	enKey:'Left',
	ruKey: 'Left'	},
{code:'ArrowDown',
	enKey:'Down',
	ruKey: 'Down'	},
{code:'ArrowRight',
	enKey:'Right',
	ruKey: 'Right'	},
	{code:'ControlRight',
	enKey:'Ctrl',
	ruKey: 'Ctrl'	}	
]
const titleName = [{
	enKey: 'Write here',
	ruKey: 'Писать здесь'
}]
const specKey = ['Backspace','Tab','Delete','CapsLock','Enter','ShiftRight','ShiftLeft','ControlRight','ControlLeft','MeteLeft','ArrowRight','ArrowLeft','ArrowUp','ArrowDown']
const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

const title = document.createElement('h3');
container.append(title);
// title.setAttribute('data-lang', data.en);
// title.innerHTML = data.titleEn;
const textarea = document.createElement('textarea');
container.append(textarea);

const keyboard_block = document.createElement('div');
keyboard_block.className = 'keyboard';
container.append(keyboard_block);

const ul = document.createElement('ul');
ul.className = 'list-keys';
keyboard_block.append(ul);

const LNG_KEY = 'lng';
let currentLanguage = localStorage.getItem(LNG_KEY);
if (!currentLanguage) {
	localStorage.setItem(LNG_KEY, 'en')
	currentLanguage = 'en';
	createKeyboard(data,currentLanguage);
}


createKeyboard(data,currentLanguage);

function createKeyboard(data, currentLanguage) {
	// использовать data.forEach
	for (let i in data) {
		let li = document.createElement('li');
		li.className = 'key';
		// сделать проверку наличия этого класса
		li.classList.add(`${data[i].addishinalClass}`);
		li.setAttribute('data-id', `${data[i].code}`);
		if(currentLanguage == "en"){
			li.textContent = `${data[i].enKey}`;
		} else {
			li.textContent = `${data[i].ruKey}`;
		}
		// li.textContent = `${data[i].enKey}`;
		ul.append(li)
	}
}
const toogleLang = (ev) => {
	if (ev.code === "ControlLeft" && ev.shiftKey) {
		
		console.log(currentLanguage)
		if (currentLanguage == 'en') {
			localStorage.setItem(LNG_KEY, 'ru');
			currentLanguage = 'ru';
			alert('now ru')
			ul.innerHTML = '';
			createKeyboard(data,currentLanguage);
		} else {
			localStorage.setItem(LNG_KEY, 'en')
	        currentLanguage = 'en';
			alert('now en');
			ul.innerHTML = '';
			createKeyboard(data,currentLanguage);
		}
		
	}
	
}
document.addEventListener('keypress', (event) => {
	 setFocus();
	let e = event.target;
	console.log(e)
	let key = event.code;
	// найти место нажатия 
	document.querySelector('.key[data-id='+key+']').classList.add('pressed');
	console.log(key)
})
document.addEventListener('keyup',(event) => {
	setFocus();
	toogleLang(event)
	let e = event.target;
	let key = event.code;
	document.querySelector('.key[data-id='+key+']').classList.remove('pressed')
	console.log(key)
	console.log(e)
	if(key === 'CapsLock') {
		keyboard_block.classList.toggle('tocase')
		// document.querySelector('.key[data-id='+key+']').toggle('caps-pressed')
	}
} );


function setFocus() {
	textarea.focus()
}

window.onload = function() {
	setFocus()
	alert('пожалуйста дайте чучуть времени')
}
// click
keyboard_block.addEventListener('click', writeByClick);

function writeByClick(event) {
	// Сделать стили как для кнопки
	let e = event.target;
	document.querySelectorAll('.key').forEach( (el) => {
		el.classList.remove('pressed')
	})
	let key = e.getAttribute('data-id');
	e.classList.add('pressed');
	console.log(key)
	
	// Поиск буквы по коду
// Switch
	let letter = '';
	if(currentLanguage == "en") {
		letter = data.find(el =>  el.code === `${key}`).enKey;
	}
	if(currentLanguage == "ru") {
		letter = data.find((el) => el.code === `${key}`).ruKey;
	}
	if (!specKey.includes(key)){
		writing(letter)
	}
	
	
	if (key === 'Enter') {  
		writing('\n')     
	}
	if (key === 'Spase') {
		writing(' ')
	}
	if (key === 'Backspace') {
	  writing()
	}
	if (key === 'CapsLock') {
	  keyboard_block.classList.toggle('tocase')
	//   e.classList.toggle('caps-pressed');
	  letter.toUpperCase()
	  console.log(letter)
	//   проверить наличие стиля капса
	}
	// если нажатие не на кнопках вернуть фокус
	if(!e === keyboard_block ) {
		setFocus();
	}
  }
  
  function writing(letter) {
	console.log(textarea.value)
	if(keyboard_block.classList.contains('tocase')) {
		console.log(letter.toUpperCase())
		textarea.value += letter.toUpperCase()
	} else {
		textarea.value += letter;
	}
	
	setFocus()
}