'use strict';

let state = {};

const input = document.getElementById('wordsInput');
const button = document.getElementById('clickme');

input.addEventListener('change', handleWords);
button.addEventListener('click', handleClick);

//the event listener for on change
function handleWords(event) {
  console.log(event.target);
  state.words = event.target.value;
  render();
}

function handleClick(event) {
  event.preventDefault();
  const words = state.words.split('');
  const reversedWords = words.reverse();
  state.words = reversedWords.join('');
  render();
}

//render the 'words'
function render() {
  document.getElementById('words').textContent = state.words;
}

function init() {
  state.words = 'nothing to see here';
  render();
}

init();

/*let state = {};

let button = document.getElementById('clicker');
button.addEventListener('click', handleClick);

let input = document.getElementById('wordsInput');
input.addEventListener('change', handleWords);

function handleWords(e) {
  state.words = e.target.value;
}

function handleClick(event) {
  event.preventDefault();
  state.words = state.words
    .split('')
    .reverse()
    .join('');

  render();
}

function init() {
  state.clicks = 0;
  state.words = 'nothing to see here';
  render();
}

function render() {
  document.getElementById('words').textContent = state.words;
}

init();
*/