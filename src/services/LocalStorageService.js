/* global localStorage */
import { FAVOURITES_KEY } from '../utils/constants';

class LocalStorageService {
  getFavouritesSongs() {
    let songs = JSON.parse(localStorage.getItem(FAVOURITES_KEY));
    if (!songs) {
      songs = [];
    }
    return songs;
  }

  saveFavouritesSongs(favourites) {
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites));
  }
}

export default LocalStorageService;
