const scoreList = document.querySelector('.score__list ul');
const inputName = document.querySelector('.input__name');
const inputScore = document.querySelector('.input__score');
const erorMsg = document.querySelector('.error');
export const refresh = document.querySelector('.refresh');
export const formOne = document.querySelector('.form__one');

function displayMessage() {
  erorMsg.innerText = '';
}

export function createNewList() {
  const newLi = document.createElement('li');

  if (inputScore.value.trim() !== '' && inputName.value.trim() !== '') {
    newLi.innerText = `${inputName.value} ${inputScore.value}`;
    scoreList.appendChild(newLi);
  } else {
    erorMsg.innerText = 'Empty input not allow';
    setTimeout(displayMessage, 3000);
  }

  inputName.value = ' ';
  inputScore.value = ' ';
}
