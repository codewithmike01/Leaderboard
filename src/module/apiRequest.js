import { inputName, inputScore } from './scoreEntry.js';

export default async function addUserScore() {
  const userData = { user: inputName.value, score: inputScore.value };
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5TiAAPGCZSdzS3sSfE2C/scores/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      // eslint-disable-next-line comma-dangle
    }
  );
  const data = await response.json();
  return data;
}

export async function getUserScore() {
  const response = await fetch(
    // eslint-disable-next-line comma-dangle
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5TiAAPGCZSdzS3sSfE2C/scores/'
  );
  const data = await response.json();
  return data;
}
