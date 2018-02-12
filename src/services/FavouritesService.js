/* global localStorage */
import { FAVOURITES_KEY } from '../utils/constants';

class FavouritesService {
  load() {
    const items = localStorage.getItem(FAVOURITES_KEY);
    if (items) {
      return JSON.parse(items);
    }
    return [];
  }

  save(items) {
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(items));
  }
}

export default FavouritesService;
