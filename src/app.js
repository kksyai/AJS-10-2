import GameSavingLoader from './GameSavingLoader.js';

(async () => {
  try {
    const result = await GameSavingLoader.load();
    console.log(result);
  }

  catch (e) {
    console.log(e);
  }
})();
