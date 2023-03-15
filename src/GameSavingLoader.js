import json from './parser.js';
import read from './reader.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const saving = await json(data);
    return new GameSaving(JSON.parse(saving));
  }
}

/* Для вас реализованы функции-заглушки, которые эмулируют чтение файла
и преобразование прочитанного в JSON. Ваша задача — реализовать класс GameSavingLoader
с методом load, который загружает данные с помощью функции read,
парсит их с помощью функции json() и создаёт объект типа GameSaving.
*/
