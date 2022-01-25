import './index.css';
import {
  validateInput,
  formOne,
  refresh,
  render,
  inputName,
  inputScore,
} from './module/scoreEntry.js';
import addUserScore, { getUserScore } from './module/apiRequest.js';

async function display() {
  const getUser = await getUserScore();
  getUser.result.sort((a, b) => b.score - a.score);
  render(getUser.result);
}

function starter() {
  display();
}

formOne.addEventListener('submit', async (e) => {
  e.preventDefault();
  validateInput();
  await addUserScore();
  inputName.value = ' ';
  inputScore.value = ' ';
  starter();
});

refresh.addEventListener('click', () => {
  display();
});

starter();
