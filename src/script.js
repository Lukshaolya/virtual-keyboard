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
	enKey:'↑',
	ruKey: '↑'	},
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
	enKey:'←',
	ruKey: '←'	},
{code:'ArrowDown',
	enKey:'↓',
	ruKey: '↓'	},
{code:'ArrowRight',
	enKey:'→',
	ruKey: '→'	},
	{code:'ControlRight',
	enKey:'Ctrl',
	ruKey: 'Ctrl'	}	
]
const titleName = {
	enKey: 'Write here',
	ruKey: 'Писать здесь',
	ruText: 'Нажми Shift + Ctrl для смены языка',
	enText: 'Press Shift + Ctrl to change the language'
}
const specKey = ['Backspace','Tab','Delete','CapsLock','Enter','AltLeft','AltRight','ShiftRight','ShiftLeft','ControlRight','ControlLeft','MetaLeft','ArrowRight','ArrowLeft','ArrowUp','ArrowDown']
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

const toogleLangText = document.createElement('p');
toogleLangText.className = 'text';

container.append(toogleLangText);


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
			title.innerHTML = titleName.enKey;
			toogleLangText.textContent = titleName.enText;
		} else {
			li.textContent = `${data[i].ruKey}`;
			title.innerHTML = titleName.ruKey;
			toogleLangText.textContent = titleName.ruText;
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
			ul.innerHTML = '';
			createKeyboard(data,currentLanguage);
		} else {
			localStorage.setItem(LNG_KEY, 'en')
	        currentLanguage = 'en';
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
	document.querySelector('.key[data-id='+key+']').classList.toggle('pressed');
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
		keyboard_block.classList.toggle('tocase');
		// if (e.getAttribute('data-id')=='CapsLock') {
		// 	document.querySelector('.key[data-id='+key+']').toggle('caps-pressed')
		// }
	}
	if (key === 'Tab') {
		setFocus();
		writing('  ') ;
	}
	if (specKey.includes(key)){
		setFocus();
		document.querySelector('.key[data-id='+key+']').classList.add('pressed');
		setTimeout(() => document.querySelector('.key[data-id='+key+']').classList.remove('pressed'), 300)
	}
} );


function setFocus() {
	textarea.focus()
}

window.onload = function() {
	setFocus()

}
// click
keyboard_block.addEventListener('click', writeByClick);

function writeByClick(event) {
	textarea.focus()
	// Сделать стили как для кнопки
	let e = event.target;
	document.querySelectorAll('.key').forEach( (el) => {
		el.classList.remove('pressed')
	})
	let key = e.getAttribute('data-id');
	e.classList.add('pressed');
	setTimeout(() => document.querySelector('.key[data-id='+key+']').classList.remove('pressed'), 500)
	
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
		let str = textarea.value
		console.log(str.slice(0, -1))
	 return  textarea.value.slice(0, -1)
	}
	if (key === 'CapsLock') {
	  keyboard_block.classList.toggle('tocase')
	//   e.classList.toggle('caps-pressed');
	  letter.toUpperCase()
	  console.log(letter)
	//   проверить наличие стиля капса
	}
	if (key === 'Tab') {
		writing('  ') 
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

// const makeOneCaps = (ev) => {
// 	let key = ev.code;
// 	if (key && ev.shiftKey) {
// 		alert(key)
// 	}
// }