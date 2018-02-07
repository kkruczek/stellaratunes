/* global localStorage */
import { ITEM_KEY } from '../utils/constants';


class LocalStorageService {
  static setFavourites(favourites) {
    localStorage.setItem(ITEM_KEY, JSON.stringify(favourites));
  }

  static getFavourites() {
    return JSON.parse(localStorage.getItem(ITEM_KEY));
  }
}

export default LocalStorageService;
