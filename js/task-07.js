
const fontSizeController=document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeController.addEventListener('input', onInput);

function onInput(evt){
	const value=evt.target.value;
	textEl.style.fontSize= `${value}px`;
}




// const input =document.querySelector('input#font-size-control');
// const text = document.querySelector('span#text');
// const value = input.value;
// console.dir(input);
// console.dir(text);


// input.addEventListener('input', handlerChangeSizer);

// function handlerChangeSizer(evt){
// 	const value=evt.target.value;
	// textEl.style.fontSize= `${value}px`;
// }