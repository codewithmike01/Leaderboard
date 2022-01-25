const scoreList = document.querySelector('.score__list ul');
const inputName = document.querySelector('.input__name');
const inputScore = document.querySelector('.input__score');
const erorMsg = document.querySelector('.error');
const refresh = document.querySelector('.refresh');
const formOne = document.querySelector('.form__one');

function displayMessage() {
  erorMsg.innerText = '';
}

export function validateInput() {
  if (inputScore.value.trim() === '' && inputName.value.trim() === '') {
    erorMsg.innerText = 'Empty input not allow';
    setTimeout(displayMessage, 3000);
  }
}

export function render(list) {
  scoreList.innerHTML = '';
  list.forEach((element) => {
    const newLi = document.createElement('li');
    newLi.innerText = `${element.user}  ${element.score}`;
    scoreList.appendChild(newLi.cloneNode(true));
  });
}

// eslint-disable-next-line object-curly-newline
export { refresh, formOne, inputName, inputScore };
