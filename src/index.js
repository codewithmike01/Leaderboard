import './index.css';
import { createNewList, formOne, refresh } from './module/scoreEntry.js';

formOne.addEventListener('submit', (e) => {
  e.preventDefault();
  createNewList();
});

refresh.addEventListener('click', () => {
  window.location.reload();
});
