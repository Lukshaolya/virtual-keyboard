const dataEn = ["`",1,2,3,4,5,6,7,8,9,0,'-','=','BACKSPACE','Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o','p', '[',']', 'Delete','CapsLock','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';','"','Enter','Shift', 'z','x','c','v','b', 'n', 'm', ',', '.', '/','up','Shift', 'Ctrl', 'Win', 'Alt', 'Spase', 'left','down','right',"Alt",]
// const dataEn = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61,"x",81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 79, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191,38, 16, 17, 91,32,18,92,37.40,39];
const dataRu = ["`",1,2,3,4,5,6,7,8,9,0,'-','=','BACKSPACE','Tab','й','ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Delete', 'CapsLock', '', '' , '', '', '', '', '', '', '' ]
const specKey = ['backspace','tab','delete','capslock','enter','shift','Backspace','Tab','Delete','Capslock','Enter','Shift']
// LANGUAGE 

let data = {
  ru: 'ru',
  ruData: dataRu,
  en: 'en',
  enData: dataEn,
  titleRu: 'Писать здесь',
  titleEn: 'write here'
};
// let data = [{
//         lang:ru,
//         title:'Писать здесь',
//         dataArray : dataRu,
//     },  
//     {
//         lang:en,
//         title:'write here',
//         dataArray : dataEn,
// }];


let deffLang = data.en;
// switch language
// document.addEventListener('keydown', function(event) {
//     if (event.code == 'ShiftLeft' && event.code == 'AltLeft' ) {
//       alert('Отменить!')
//     }
//   });



const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

const title = document.createElement('h3');
container.append(title);
title.setAttribute('data-lang', data.en);
title.innerHTML = data.titleEn;
const textarea = document.createElement('textarea');
container.append(textarea);

const keyboard_block = document.createElement('div');
keyboard_block.className = 'keyboard';
container.append(keyboard_block);

const ul = document.createElement('ul');
ul.className = 'list-keys';
keyboard_block.append(ul);

// call functions
fullKeyboardSymboals(dataEn);

keyboard_block.addEventListener('click', writeByClick);
document.addEventListener('keydown', writeByPress);



let bsBtn = document.querySelector('.key[data-id="BACKSPACE"]');
let tabBtn = document.querySelector('.key[data-id="Tab"]');
let capsBtn = document.querySelector('.key[data-id="CapsLock"]');
let enterBtn = document.querySelector('.key[data-id="Enter"]');
let spaceBtn = document.querySelector('.key[data-id="Spase"]');
let shiftBtn = document.querySelectorAll('.key[data-id="Shift"]');
let delBtn = document.querySelector('.key[data-id="Delete"]');

bsBtn.classList.add('backspace_key');
tabBtn.classList.add('tab_key');
capsBtn.classList.add('caps_lock_key');
enterBtn.classList.add('enter_key');
spaceBtn.classList.add('space_key');
delBtn.classList.add('del_key');

shiftBtn.forEach((el) => {
    el.classList.add('shift_key')
})


// Func

function fullKeyboardSymboals(data) {
  let keys='';
  for (let i in data) {
      keys += `<li class="key" data-id='${data[i]}'>${data[i]}</li>`;
      ul.innerHTML = keys;
  }
}

function writeByClick(event) {
  let e = event.target;
  document.querySelectorAll('.key').forEach( (el) => {
      el.classList.remove('pressed')
  })
  let key = e.getAttribute('data-id').toLowerCase();
  e.classList.add('pressed');
  console.log(key)
  if (!specKey.includes(key)){
      press(key);
  }
  
  if (key === 'enter') { 
    key = null;       
    press('\n')
  }
  if (key === 'spase') {
    press(' ');
  }
  if (key === 'backspace') {
    key == 'Backspace';
    press()
  }
  if (key === 'capslock') {
    keyboard_block.classList.toggle('tocase')
  }
}



function writeByPress(event) {
  event.preventDefault();
  let key = event.key;
  console.log(key, event.code)
  
  if (key === " ") {
	press(" ");
	}

	if (key === "Enter") {
		press("\n");
	}

  if (!specKey.includes(key)){
    press(key);
  }

    // add pressed style
  document.querySelectorAll('.key').forEach( (el) => {
    el.classList.remove('pressed');
  })
  document.querySelector('.key[data-id='+key+']').classList.add('pressed');

    


}

function press(letter) {
  let text = textarea.value;
  textarea.value += letter;
  let letterArray = textarea.value.split('');
}