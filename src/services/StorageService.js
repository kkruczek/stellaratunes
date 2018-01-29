/* global localStorage */
import { FAVOURITE_STORAGE_KEY } from '../utils/constants';

class StorageService {
  storeFavourites(favourites) {
    localStorage.setItem(FAVOURITE_STORAGE_KEY, JSON.stringify(favourites));
  }

  loadFavourites() {
    return JSON.parse(localStorage.getItem(FAVOURITE_STORAGE_KEY)) || [];
  }
}

export default StorageService;
